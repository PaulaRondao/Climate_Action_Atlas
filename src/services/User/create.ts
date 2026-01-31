import { CreateUserDTO } from '@/constants';
import prisma from '@/lib/prisma/client';
import bcrypt from 'bcryptjs';

const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hashSync(password, salt);
};

type CreateUserInput = CreateUserDTO & { confirmPassword?: string };

export async function createUser(userDTO: CreateUserInput) {
  const existingUser = await prisma.user.findUnique({
    where: { email: userDTO.email },
  });

  if (existingUser) {
    throw new Error('Cet email est déjà utilisé');
  }

  if (!userDTO.password) {
    userDTO.password = crypto.randomUUID();
  }

  const encryptedPassword = await encryptPassword(userDTO.password);

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { confirmPassword, ...userData } = userDTO;

  const createdUser = await prisma.user.create({
    data: {
      ...userData,
      password: encryptedPassword,
    },
  });

  return createdUser;
}
