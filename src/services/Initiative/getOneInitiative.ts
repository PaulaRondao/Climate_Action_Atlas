import prisma from '@/lib/prisma';
import { InitiativeWithRelations } from '@/types/initiatives';

export const getOneInitiative = async (
  initiativeId: number,
): Promise<InitiativeWithRelations | null> => {
  return await prisma.initiative.findUnique({
    where: { id: initiativeId },
    include: {
      contributor: {
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      initiativeLocation: true,
      user: true,
    },
  });
};
