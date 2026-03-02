import prisma from '@/lib/prisma';
import { InitiativeWithRelations } from '@/types/initiatives';

export const getInitiativeById = async (
  initiativeId: number,
): Promise<InitiativeWithRelations | null> => {
  return await prisma.initiative.findUnique({
    where: { id: initiativeId },
    include: {
      contributor: {
        select: {
          id: true,
          email: true,
          emailVerified: true,
          name: true,
          image: true,
          createdAt: true,
          updatedAt: true,
          loginAttempts: true,
          role: true,
        },
      },
      initiativeLocation: true,
    },
  });
};
