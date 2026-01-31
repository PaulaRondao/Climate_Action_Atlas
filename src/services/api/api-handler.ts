import { authOptions } from '@/lib/next-auth/authOptions';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import logger from '@/lib/pino/logger.server';

export default async function serverAsyncResolve<T>(
  asyncCallback: () => Promise<NextResponse>,
): Promise<NextResponse> {
  try {
    return await asyncCallback();
  } catch (err) {
    logger.error(err, 'Erreur serveur interne');
    if (err instanceof Error) {
      switch (err.name) {
        default:
          return NextResponse.json({
            type: BackendApiResponseType.ERROR,
            error: err.message,
            status: HttpStatusCode.HTTP_SERVER_ERROR,
          });
      }
    }
    return NextResponse.json({
      type: BackendApiResponseType.ERROR,
      error: 'Erreur serveur interne',
      status: HttpStatusCode.HTTP_SERVER_ERROR,
    });
  }
}

export const checkIdValidity = (params: {
  id: string;
}): number | NextResponse => {
  const { id } = params;
  const userId = parseInt(id, 10);

  if (isNaN(userId)) {
    return NextResponse.json(
      { error: 'Id invalide' },
      { status: HttpStatusCode.HTTP_BAD_REQUEST },
    );
  }
  return userId;
};

export const checkSessionValidityAndAuthentificated = async (
  userId: number,
) => {
  const session = await checkSessionValidity();
  if (session instanceof NextResponse) return session;

  const sessionUserId = Number(session.user.id);

  if (sessionUserId !== userId) {
    return NextResponse.json(
      { error: 'Accès interdit' },
      { status: HttpStatusCode.HTTP_FORBIDDEN },
    );
  }

  return { session, userId };
};

export const checkSessionValidity = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json(
      { error: 'Non autorisé' },
      { status: HttpStatusCode.HTTP_NOT_AUTHORIZED },
    );
  }

  return session;
};
