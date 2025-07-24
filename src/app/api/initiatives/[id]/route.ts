import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = parseInt(params.id);
    const initiative = await prisma.initiative.findUnique({
      where: { initiativeId: id },
      include: {
        contributor: true,
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
  { params }: { params: { id: string } },
) {
  try {
    const id = parseInt(params.id);
    const data = await request.json();

    const initiative = await prisma.initiative.update({
      where: { initiativeId: id },
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
  { params }: { params: { id: string } },
) {
  try {
    const id = parseInt(params.id);
    await prisma.initiative.delete({
      where: { initiativeId: id },
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
