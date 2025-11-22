import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';
import { InitiativeType, Prisma } from '@prisma/client';
import { initiativeCreationSchema } from '@/components/molecules/Forms/initiative-form/initiativeFormValidation';
import logger from '@/lib/pino/logger.server';

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
    logger.error(error, 'Error fetching initiatives');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const bodyRequest = await request.json();

    const parsed = initiativeCreationSchema.parse(bodyRequest);

    const createNewInitiativeLocation = await prisma.initiativeLocation.create({
      data: {
        street: parsed.address,
        postcode: parsed.postcode,
        city: parsed.city,
        country: parsed.country,
        latitude: parsed.latitude,
        longitude: parsed.longitude,
      },
    });

    const createNewInitiative = await prisma.initiative.create({
      data: {
        name: parsed.name,
        description: parsed.description,
        initiativeType: parsed.initiativeType,
        contributorId: parsed.contributorId,
        narrative: parsed.narrative,
        associationName: parsed.associationName,
        email: parsed.email,
        webSite: parsed.webSite,
        initiativeLocationId: createNewInitiativeLocation.id,
      },
      include: {
        contributor: true,
        initiativeLocation: true,
      },
    });

    return NextResponse.json(createNewInitiative, { status: 201 });
  } catch (error) {
    logger.error(error, 'Error creating initiative');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
