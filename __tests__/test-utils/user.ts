import prisma from '@/lib/prisma';
import { UserRole } from '@prisma/client';
import crypto from 'crypto';

export const createTestUser = async () => {
  return prisma.user.create({
    data: {
      id: crypto.randomUUID(),
      name: 'Test User',
      email: `${crypto.randomUUID()}@mail.com`,
      emailVerified: true,
      role: UserRole.CONTRIBUTOR,
    },
  });
};
