import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';
import { Prisma } from '@prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const skip = (page - 1) * limit;

    const where: Prisma.InitiativeWhereInput = search
      ? {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        }
      : {};

    const [initiatives, total] = await Promise.all([
      prisma.initiative.findMany({
        where,
        skip,
        take: limit,
        include: {
          contributor: true,
          organizer: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.initiative.count({ where }),
    ]);

    return NextResponse.json({
      initiatives,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page,
        perPage: limit,
      },
    });
  } catch (error) {
    console.error('Error fetching initiatives:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const initiative = await prisma.initiative.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        contributor: true,
        organizer: true,
      },
    });

    return NextResponse.json(initiative, { status: 201 });
  } catch (error) {
    console.error('Error creating initiative:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
