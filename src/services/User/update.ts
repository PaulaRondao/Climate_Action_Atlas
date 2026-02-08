import prisma from '@/lib/prisma';
import { UpdateUserBody } from '@/validation/userSchema';

export const updateUser = async (userId: string, data: UpdateUserBody) => {
  return prisma.user.update({
    where: { id: userId },
    data,
  });
};
