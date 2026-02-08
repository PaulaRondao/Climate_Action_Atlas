import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
// import { nextCookies } from 'better-auth/next-js';
import prisma from './prisma';
// import { Resend } from "resend";
// import { Pool } from "pg";
// import { headers } from 'next/headers';

// const resend = new Resend(process.env.RESEND_API_KEY!);

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  basePath: 'api/auth',
  baseURL: process.env.BETTER_AUTH_BASE_URL!,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    // sendResetPassword: async ({ user, token }) => {}
  },
  user: {
    deleteUser: {
      enabled: true,
    },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 5 * 60,
      },
    },
  },
  // resetPasswordTokenExpiresIn: 3600,
  // plugins: [nextCookies()],
});
