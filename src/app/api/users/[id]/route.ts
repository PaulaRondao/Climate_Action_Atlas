import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';
import type { UpdateUserDTO } from '@/constants/types';
import logger from '@/lib/pino/logger.server';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import serverAsyncResolve, {
  checkIdValidity,
  checkSessionValidityAndAuthentificated,
} from '@/services/api/api-handler';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  return serverAsyncResolve(async () => {
    const userWithValidatedId = checkIdValidity({ id });
    if (userWithValidatedId instanceof NextResponse) return userWithValidatedId;

    const userId = userWithValidatedId;
    const authentificatedUser = await checkSessionValidityAndAuthentificated(
      userId,
    );
    if (authentificatedUser instanceof NextResponse) return authentificatedUser;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      omit: {
        password: true,
        loginAttempts: true,
      },
      include: { initiatives: true },
    });

    if (!user) {
      return NextResponse.json(
        { type: BackendApiResponseType.ERROR, error: 'Utilisateur non trouvé' },
        { status: HttpStatusCode.HTTP_BAD_REQUEST },
      );
    }

    return NextResponse.json(
      { type: BackendApiResponseType.SUCCESS, data: user },
      { status: HttpStatusCode.HTTP_OK },
    );
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  return serverAsyncResolve(async () => {
    const userWithValidatedId = checkIdValidity({ id });
    if (userWithValidatedId instanceof NextResponse) return userWithValidatedId;

    const userId = userWithValidatedId;
    const authentificatedUser = await checkSessionValidityAndAuthentificated(
      userId,
    );
    if (authentificatedUser instanceof NextResponse) return authentificatedUser;

    let data: UpdateUserDTO;

    try {
      data = await request.json();
    } catch (error) {
      logger.error(error, 'Body invalide ou manquant');
      return NextResponse.json(
        { error: 'Body invalide ou manquant' },
        { status: HttpStatusCode.HTTP_BAD_REQUEST },
      );
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { error: 'Aucune donnée à mettre à jour' },
        { status: HttpStatusCode.HTTP_BAD_REQUEST },
      );
    }

    const userToUpdate = await prisma.user.update({
      where: { id: userId },
      data,
    });

    if (!userToUpdate) {
      return NextResponse.json(
        {
          type: BackendApiResponseType.ERROR,
          error: 'Utilisateur non mis à jour',
        },
        { status: HttpStatusCode.HTTP_BAD_REQUEST },
      );
    }

    return NextResponse.json(
      {
        type: BackendApiResponseType.SUCCESS,
        message: 'Utilisateur mis à jour avec succès',
        data: userToUpdate,
      },
      { status: HttpStatusCode.HTTP_OK },
    );
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  return serverAsyncResolve(async () => {
    const userWithValidatedId = checkIdValidity({ id });
    if (userWithValidatedId instanceof NextResponse) return userWithValidatedId;

    const userId = userWithValidatedId;
    const authentificatedUser = await checkSessionValidityAndAuthentificated(
      userId,
    );
    if (authentificatedUser instanceof NextResponse) return authentificatedUser;

    const user = await prisma.user.delete({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        {
          type: BackendApiResponseType.ERROR,
          error: 'Erreur lors de la suppression utilisateur',
        },
        { status: HttpStatusCode.HTTP_BAD_REQUEST },
      );
    }

    return NextResponse.json(
      {
        type: BackendApiResponseType.SUCCESS,
        message: 'Utilisateur supprimé avec succès',
      },
      { status: HttpStatusCode.HTTP_OK },
    );
  });
}
