import prisma from '@/lib/prisma';

export const getUser = async (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    omit: {
      loginAttempts: true,
    },
    include: { initiatives: true },
  });
};
