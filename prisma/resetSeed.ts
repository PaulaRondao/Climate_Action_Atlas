import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function resetSeedDatabase() {
  try {
    await prisma.user.deleteMany();
    await prisma.session.deleteMany();
    await prisma.initiative.deleteMany();
    await prisma.initiativeLocation.deleteMany();

    console.log('Seeds have been deleted');
  } catch (error) {
    console.error('Error While generating Seed: \n', error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
resetSeedDatabase();
