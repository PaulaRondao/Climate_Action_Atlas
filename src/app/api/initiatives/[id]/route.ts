import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';

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
      where: { initiativeId },
      include: {
        contributor: true,
        address: true,
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
    console.error('Error fetching initiative:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const initiativeId = parseInt(id, 10);
    if (isNaN(initiativeId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
    const data = await request.json();

    const initiative = await prisma.initiative.update({
      where: { initiativeId },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: {
        contributor: true,
      },
    });

    return NextResponse.json(initiative);
  } catch (error) {
    console.error('Error updating initiative:', error);
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
      where: { initiativeId },
    });

    return NextResponse.json({ message: 'Initiative deleted successfully' });
  } catch (error) {
    console.error('Error deleting initiative:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
