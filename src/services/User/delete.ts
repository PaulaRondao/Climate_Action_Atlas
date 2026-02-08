import prisma from '@/lib/prisma';

export const deleteUser = async (userId: string) => {
  return prisma.user.delete({
    where: { id: userId },
    include: { initiatives: true },
  });
};
