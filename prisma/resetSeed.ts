import {
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient();

async function resetSeedDatabase() {
  try {
    await prisma.initiative.deleteMany();
    await prisma.address.deleteMany();
    await prisma.user.deleteMany();

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
