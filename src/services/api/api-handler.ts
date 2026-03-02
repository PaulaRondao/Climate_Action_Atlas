import { NextRequest, NextResponse } from 'next/server';
import qs from 'qs';
import parseObject from '@/helpers/parseType';
import { Session } from 'better-auth/*';
import { Handler, Params } from '@/types/Api-handler';
import prisma from '@/lib/prisma';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import z from 'zod';
import { getSession } from '@/lib/auth-server';
import { UserRole } from '@/types/enums/userRole';

const convertQueryParams = (searchParams: URLSearchParams): Params => {
  const queryString = searchParams.toString();
  const parsed = qs.parse(queryString, { ignoreQueryPrefix: true });
  const parseTyped = parseObject(parsed);
  return parseTyped as Params;
};

const checkSessionValidity = (session?: Session | null): string => {
  if (!session?.userId) {
    throw new Error('Not authorized');
  }

  return session.userId;
};

const checkRoleValidity = (
  userRole: UserRole | undefined,
  authorizeRoles: UserRole[],
) => {
  if (!userRole) {
    throw new Error('Not authorized');
  }

  if (!authorizeRoles.includes(userRole)) {
    throw new Error('Not authorized');
  }
};

export const checkContributorValidity = async (
  contributor: string,
  initiativeId: number,
) => {
  const initiative = await prisma.initiative.findUnique({
    where: { id: initiativeId },
    select: { contributorId: true },
  });

  if (!initiative) {
    throw new Error('Initiative not found');
  }

  if (initiative.contributorId !== contributor) {
    throw new Error('Not authorized');
  }
  return true;
};

export const apiHandler =
  <TBody = any, TParams = any>(handler: Handler<TBody, TParams>) =>
  async (
    req: NextRequest,
    { params }: { params: Promise<Record<string, string>> },
  ): Promise<Response> => {
    const asyncParams: Record<string, string> = await params;
    const sessionData = await getSession();

    try {
      if (!handler) {
        Response.json(
          { error: 'Méthode non permise' },
          { status: HttpStatusCode.HTTP_NOT_ALLOWED },
        );
      }

      if (handler.authorizeRoles && handler.authorizeRoles.length) {
        checkSessionValidity(sessionData?.session);
        checkRoleValidity(
          sessionData?.user.role as UserRole | undefined,
          handler.authorizeRoles,
        );
      }

      // BODY
      let body = undefined as TBody;
      if (
        handler.bodySchema &&
        ['POST', 'PATCH', 'DELETE'].includes(req.method)
      ) {
        const rawBody = await req.json();
        try {
          body = handler.bodySchema.parse(rawBody);
        } catch (error) {
          if (error instanceof z.ZodError) {
            return NextResponse.json(
              {
                error: 'Invalid body parameters',
                details: error.errors,
              },
              { status: HttpStatusCode.HTTP_BAD_REQUEST },
            );
          }
          throw error;
        }
      }

      // QUERY
      let queryParams = undefined as TParams;
      if (handler.querySchema) {
        try {
          queryParams = handler.querySchema.parse(
            convertQueryParams(req.nextUrl.searchParams),
          );
        } catch (error) {
          if (error instanceof z.ZodError) {
            return NextResponse.json(
              {
                error: 'Invalid query parameters',
                details: error.errors,
              },
              { status: HttpStatusCode.HTTP_BAD_REQUEST },
            );
          }
          throw error;
        }
      }

      // PARAMS
      let pathParams = undefined as TParams;
      if (handler.paramsSchema) {
        try {
          pathParams = handler.paramsSchema.parse(asyncParams);
        } catch (error) {
          if (error instanceof z.ZodError) {
            return NextResponse.json(
              {
                error: 'Invalid params parameters',
                details: error.errors,
              },
              { status: HttpStatusCode.HTTP_BAD_REQUEST },
            );
          }
          throw error;
        }
      }

      const reqParams: TParams = {
        ...pathParams,
        ...queryParams,
      };

      if (sessionData?.user) {
        (req as any).user = sessionData.user;
      }

      return await handler.fn(req, body, reqParams);
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json(
          { error: error.message },
          { status: HttpStatusCode.HTTP_BAD_REQUEST },
        );
      }

      return NextResponse.json(
        { error: 'Error server interne' },
        { status: HttpStatusCode.HTTP_SERVER_ERROR },
      );
    }
  };
