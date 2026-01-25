import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';
import type { CreateUserDTO } from '@/constants/types';
import { createUser } from '@/services/user';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import logger from '@/lib/pino/logger.server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email parameter is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: HttpStatusCode.HTTP_NOT_FOUND }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    logger.error(error, 'Error fetching user');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: HttpStatusCode.HTTP_SERVER_ERROR }
    );
  }
}

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
      { status: HttpStatusCode.HTTP_CREATED }
    );
  } catch (error) {
    logger.error(error, 'Erreur création utilisateur');
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: HttpStatusCode.HTTP_SERVER_ERROR }
    );
  }
}
