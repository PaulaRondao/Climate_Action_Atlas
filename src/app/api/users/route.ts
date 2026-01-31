import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';
import type { CreateUserDTO } from '@/constants/types';
import { createUser } from '@/services/User/create';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import logger from '@/lib/pino/logger.server';

export async function POST(request: Request) {
  try {
    const data: CreateUserDTO = await request.json();
    const user = await createUser(data);

    return NextResponse.json(
      {
        message: "Demande d'inscription envoyée",
        type: BackendApiResponseType.SUCCESS,
        data: user,
      },
      { status: HttpStatusCode.HTTP_CREATED },
    );
  } catch (error: unknown) {
    logger.error(error, "Erreur lors de la création de l'utilisateur");
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: HttpStatusCode.HTTP_SERVER_ERROR },
    );
  }
}
