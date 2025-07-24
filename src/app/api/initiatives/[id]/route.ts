import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } },
) {
  const id = parseInt(context.params.id, 10);

  const initiative = await prisma.initiative.findUnique({
    where: { initiativeId: id },
    include: { contributor: true },
  });

  if (!initiative) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(initiative);
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } },
) {
  const id = parseInt(context.params.id, 10);
  const data = await req.json();

  const updated = await prisma.initiative.update({
    where: { initiativeId: id },
    data: { ...data, updatedAt: new Date() },
    include: { contributor: true },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } },
) {
  const id = parseInt(context.params.id, 10);

  await prisma.initiative.delete({
    where: { initiativeId: id },
  });

  return NextResponse.json({ message: 'Initiative deleted successfully' });
}

// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const id = parseInt(params.id);
//     const data = await request.json();

//     const initiative = await prisma.initiative.update({
//       where: { initiativeId: id },
//       data: {
//         ...data,
//         updatedAt: new Date(),
//       },
//       include: {
//         contributor: true,
//       },
//     });

//     return NextResponse.json(initiative);
//   } catch (error) {
//     console.error('Error updating initiative:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 },
//     );
//   }
// }

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const id = parseInt(params.id);
//     await prisma.initiative.delete({
//       where: { initiativeId: id },
//     });

//     return NextResponse.json({ message: 'Initiative deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting initiative:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 },
//     );
//   }
// }
