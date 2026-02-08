import { NextRequest, NextResponse } from 'next/server';
import { createAnInitiative } from '@/services/Initiative/create';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import { apiHandler } from '@/services/api/api-handler';
import {
  InitiativeCreationFormData,
  initiativeCreationSchema,
} from '@/validation/initiativeSchema';
import prisma from '@/lib/prisma';
import { InitiativeType, Prisma } from '@prisma/client';
import logger from '@/lib/pino/logger.server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || '';

    const where: Prisma.InitiativeWhereInput = {
      AND: [
        search
          ? {
              OR: [
                { name: { contains: search } },
                { associationName: { contains: search } },
                { description: { contains: search } },
              ],
            }
          : {},
        type ? { initiativeType: { has: type as InitiativeType } } : {},
      ],
    };

    const initiatives = await prisma.initiative.findMany({
      where,
      include: {
        contributor: true,
        initiativeLocation: true,
      },
    });

    return NextResponse.json({
      initiatives,
    });
  } catch (error) {
    logger.error(error, "Erreur lors de la récupération d'une initiative");
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: HttpStatusCode.HTTP_SERVER_ERROR },
    );
  }
}

const post = async (request: NextRequest, body: InitiativeCreationFormData) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = (request as any).user;

  if (!user?.id) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Non autorisé' },
      { status: HttpStatusCode.HTTP_NOT_AUTHORIZED },
    );
  }

  const createdInitiative = await createAnInitiative(body, user.id);

  return NextResponse.json(
    { type: BackendApiResponseType.SUCCESS, data: createdInitiative },
    { status: HttpStatusCode.HTTP_CREATED },
  );
};

export const POST = apiHandler({
  fn: post,
  bodySchema: initiativeCreationSchema,
});
