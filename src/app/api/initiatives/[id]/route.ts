import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';
import logger from '@/lib/pino/logger.server';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import serverAsyncResolve, {
  checkIdValidity,
  checkSessionValidity,
} from '@/services/api/api-handler';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import { UpdateInitiativeDTO } from '@/constants';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  return serverAsyncResolve(async () => {
    const initiativeWithValidatedId = checkIdValidity({ id });
    if (initiativeWithValidatedId instanceof NextResponse)
      return initiativeWithValidatedId;

    const initiative = await prisma.initiative.findUnique({
      where: { id: initiativeWithValidatedId },
      include: {
        contributor: {
          select: {
            id: true,
            email: true,
            userName: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        initiativeLocation: true,
      },
    });

    const contributor = await checkSessionValidity();
    if (contributor instanceof NextResponse) return contributor;
    const contributorId = Number(contributor.user.id);

    if (!initiative) {
      return NextResponse.json(
        { type: BackendApiResponseType.ERROR, error: 'Initiative non trouvée' },
        { status: HttpStatusCode.HTTP_NOT_FOUND },
      );
    }

    if (contributorId != initiative.contributor.id) {
      return NextResponse.json(
        { type: BackendApiResponseType.ERROR, error: 'Accès interdit' },
        { status: HttpStatusCode.HTTP_FORBIDDEN },
      );
    }

    return NextResponse.json(
      { type: BackendApiResponseType.SUCCESS, data: initiative },
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
    const initiativeWithValidatedId = checkIdValidity({ id });
    if (initiativeWithValidatedId instanceof NextResponse)
      return initiativeWithValidatedId;

    const contributor = await checkSessionValidity();
    if (contributor instanceof NextResponse) return contributor;
    const contributorId = Number(contributor.user.id);

    const findInitiativeId = await prisma.initiative.findUnique({
      where: { id: initiativeWithValidatedId },
    });

    if (!findInitiativeId) {
      return NextResponse.json(
        { type: BackendApiResponseType.ERROR, error: 'Initiative non trouvée' },
        { status: HttpStatusCode.HTTP_NOT_FOUND },
      );
    }

    if (contributorId !== findInitiativeId?.contributorId) {
      return NextResponse.json(
        { type: BackendApiResponseType.ERROR, error: 'Accès interdit' },
        { status: HttpStatusCode.HTTP_FORBIDDEN },
      );
    }

    await prisma.initiative.delete({
      where: { id: initiativeWithValidatedId },
    });

    return NextResponse.json(
      {
        type: BackendApiResponseType.SUCCESS,
        message: 'Initiative supprimée avec succès',
      },
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
    const initiativeWithValidatedId = checkIdValidity({ id });
    if (initiativeWithValidatedId instanceof NextResponse)
      return initiativeWithValidatedId;

    const contributor = await checkSessionValidity();
    if (contributor instanceof NextResponse) return contributor;
    const contributorId = Number(contributor.user.id);

    const findInitiativeId = await prisma.initiative.findUnique({
      where: { id: initiativeWithValidatedId },
    });

    if (!findInitiativeId) {
      return NextResponse.json(
        { type: BackendApiResponseType.ERROR, error: 'Initiative non trouvée' },
        { status: HttpStatusCode.HTTP_NOT_FOUND },
      );
    }

    if (contributorId !== findInitiativeId.contributorId) {
      return NextResponse.json(
        { type: BackendApiResponseType.ERROR, error: 'Accès interdit' },
        { status: HttpStatusCode.HTTP_FORBIDDEN },
      );
    }

    let data: UpdateInitiativeDTO;

    try {
      data = await request.json();
      if (Object.keys(data).length === 0) {
        return NextResponse.json(
          {
            type: BackendApiResponseType.ERROR,
            error: 'Aucune donnée à mettre à jour',
          },
          {
            status: HttpStatusCode.HTTP_BAD_REQUEST,
          },
        );
      }
    } catch (error) {
      logger.error(error, 'Body invalide ou manquant');
      return NextResponse.json(
        {
          type: BackendApiResponseType.ERROR,
          error: 'Body invalide ou manquant',
        },
        {
          status: HttpStatusCode.HTTP_BAD_REQUEST,
        },
      );
    }

    const initiativeToUpdate = await prisma.initiative.update({
      where: { id: initiativeWithValidatedId },
      data: { ...data, updatedAt: new Date() },
    });

    return NextResponse.json(
      {
        type: BackendApiResponseType.SUCCESS,
        message: 'Initiative mise à jour avec succès',
        data: initiativeToUpdate,
      },
      { status: HttpStatusCode.HTTP_OK },
    );
  });
}
