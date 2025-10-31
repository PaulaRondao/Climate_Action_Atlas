import { CreateUserDTO } from '@/constants';
import prisma from '@/lib/prisma/client';
import bcrypt from 'bcryptjs';

const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hashSync(password, salt);
};

export async function createUser(userDTO: CreateUserDTO) {
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

  const createdUser = await prisma.user.create({
    data: {
      ...userDTO,
      password: encryptedPassword,
      updatedAt: new Date(),
    },
  });

  return createdUser;
}
