import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/client';
import logger from '@/lib/pino/logger.server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const initiativeId = parseInt(id, 10);
    if (isNaN(initiativeId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const initiative = await prisma.initiative.findUnique({
      where: { id: initiativeId },
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

    if (!initiative) {
      return NextResponse.json(
        { error: 'Initiative not found' },
        { status: 404 },
      );
    }

    return NextResponse.json(initiative);
  } catch (error) {
    logger.error(error, 'Error fetching initiative');

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const initiativeId = parseInt(id, 10);
    if (isNaN(initiativeId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
    await prisma.initiative.delete({
      where: { id: initiativeId },
    });

    return NextResponse.json({
      message: 'Initiative deleted successfully',
      status: 204,
    });
  } catch (error) {
    logger.error(error, 'Error deleting initiative');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const initiativeId = parseInt(id, 10);
    if (isNaN(initiativeId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
    await prisma.initiative.update({
      where: { id: initiativeId },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({
      message: 'Initiative updated successfully',
      status: 200,
    });
  } catch (error) {
    logger.error(error, 'Error updating initiative');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
