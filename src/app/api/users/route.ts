import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma/client';
import type { CreateUserDTO } from '@/constants/types';
import { createUser } from '@/services/create';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: HttpStatusCode.HTTP_NOT_FOUND },
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: HttpStatusCode.HTTP_SERVER_ERROR },
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
      { status: HttpStatusCode.HTTP_CREATED },
    );
  } catch (error: any) {
    console.error('Erreur création utilisateur', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: HttpStatusCode.HTTP_SERVER_ERROR },
    );
  }
}
