import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { z } from 'zod';
import { sign } from 'jsonwebtoken';
import prisma from '@/lib/prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const signUpSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = signUpSchema.parse(body);

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.userAccount.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Cet email est déjà utilisé' },
        { status: 400 },
      );
    }

    // Hasher le mot de passe
    const hashedPassword = await hash(password, 12);

    // Créer l'utilisateur
    const user = await prisma.userAccount.create({
      data: {
        userName: `${firstName} ${lastName}`,
        email,
        password: hashedPassword,
        lastConnect: new Date(),
      },
    });

    // Générer le token JWT
    const token = sign(
      { userId: user.userAccountId, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' },
    );

    // Ne pas renvoyer le mot de passe dans la réponse
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: 'Inscription réussie',
        user: userWithoutPassword,
        token,
      },
      {
        status: 201,
        headers: {
          'Set-Cookie': `token=${token}; Path=/; HttpOnly; Max-Age=86400; SameSite=Strict`,
        },
      },
    );
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Données invalides', details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 },
    );
  }
}
