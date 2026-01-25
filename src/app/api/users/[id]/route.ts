import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/client';
import type { UpdateUserDTO } from '@/constants/types';
import logger from '@/lib/pino/logger.server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
      omit: {
        password: true,
        loginAttempts: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    logger.error(error, 'Error fetching user');
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
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
    const data: UpdateUserDTO = await request.json();

    await prisma.user.update({
      where: { id: userId },
      data,
    });

    return NextResponse.json(
      { error: 'User updated successfully' },
      { status: 200 },
    );
  } catch (error) {
    logger.error(error, 'Error updating user');
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
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({
      message: 'User deleted successfully',
      status: 204,
    });
  } catch (error) {
    logger.error(error, 'Error deleting user');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
