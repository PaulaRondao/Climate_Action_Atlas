import prisma from '@/lib/prisma';

export const getInitiativeByUser = async (userId: string) => {
  return await prisma.initiative.findMany({
    where: { contributorId: userId },
    include: {
      contributor: true,
      initiativeLocation: true,
    },
  });
};
