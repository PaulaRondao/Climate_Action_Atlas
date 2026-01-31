import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';
import { InitiativeType, Prisma } from '@prisma/client';
import logger from '@/lib/pino/logger.server';
import { authOptions } from '@/lib/next-auth/authOptions';
import { getServerSession } from 'next-auth';
import { createAnInitiative } from '@/services/Initiative/create';
import { initiativeCreationSchema } from '@/components/molecules/Forms/initiative-form/initiativeFormValidation';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';

export async function GET(request: Request) {
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
      orderBy: {
        createdAt: 'desc',
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

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: HttpStatusCode.HTTP_NOT_AUTHORIZED },
      );
    }

    const contributorId = Number(session.user.id);

    const bodyRequest = await request.json();

    const parsed = initiativeCreationSchema.parse(bodyRequest);

    const createdInitiative = await createAnInitiative(parsed, contributorId);

    return NextResponse.json(createdInitiative, { status: 201 });
  } catch (error) {
    logger.error(error, "Erreur dans la création d'une initiative");
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: HttpStatusCode.HTTP_SERVER_ERROR },
    );
  }
}
