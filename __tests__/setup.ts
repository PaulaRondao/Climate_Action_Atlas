import prisma from '@/lib/prisma';

afterEach(async () => {
  await prisma.initiative.deleteMany();
  await prisma.user.deleteMany();
});
