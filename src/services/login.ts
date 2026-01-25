import prisma from '@/lib/prisma/client';
import { UserAccount } from '@/types/User';
import bcrypt from 'bcryptjs';

const wrongPassword = async (user: UserAccount) => {
  const maxTry = 5;
  const updateTry = (user.loginAttempts ?? 0) + 1;

  if (updateTry >= maxTry) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        loginAttempts: 0,
      },
    });
    throw new Error(
      "Votre compte vient d'être bloqué car trop de tentatives ont échouées. Veuillez contacter l'administrateur."
    );
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { loginAttempts: updateTry },
  });
  throw new Error(
    'Vérifiez votre adresse e-mail et mot de passe. Attention 5 tentatives autorisées.'
  );
};

export async function login(userEmail: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    throw new Error('Vérifiez votre adresse e-mail ou mot de passe.');
  }

  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    await wrongPassword(user);
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { loginAttempts: 0, updatedAt: new Date() },
  });

  return updatedUser;
}
