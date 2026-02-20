import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
// import { nextCookies } from 'better-auth/next-js';
import prisma from './prisma';
import { customSession } from 'better-auth/plugins';
import { getUser } from '@/services/User/getUser';
// import { UserRole } from '@/types/enums/userRole';
// import { Resend } from "resend";
// import { Pool } from "pg";
// import { headers } from 'next/headers';

// const resend = new Resend(process.env.RESEND_API_KEY!);

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  basePath: 'api/auth',
  baseURL: process.env.BETTER_AUTH_URL!,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    // sendResetPassword: async ({ user, token }) => {}
  },
  user: {
    changeEmail: {
      enabled: true,
      // sendChangeEmailConfirmation: async ({ user, newEmail, url, token }, request) => {
      //           void sendEmail({
      //               to: user.email, // Sent to the CURRENT email
      //               subject: 'Approve email change',
      //               text: `Click the link to approve the change to ${newEmail}: ${url}`
      //           })
      //       }
    },
    deleteUser: {
      enabled: true,
    },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 5 * 60,
      },
    },
    additionalFields: {
      role: {
        type: 'string',
        // defaultValue: UserRole.CONTRIBUTOR,
      },
    },
    //
  },
  plugins: [
    customSession(async ({ user, session }) => {
      const registerUser = await getUser(user.id);
      return {
        user: {
          ...user,
          role: registerUser?.role,
        },
        session,
      };
    }),
  ],
  // emailVerification: {
  //     // Required to send the verification email
  //     sendVerificationEmail: async ({ user, url, token }) => {
  //         void sendEmail({
  //             to: user.email,
  //         })
  //     }
  // },
  // resetPasswordTokenExpiresIn: 3600,
  // plugins: [nextCookies()],
});
