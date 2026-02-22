import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma';
import { customSession } from 'better-auth/plugins';
import { getUser } from '@/services/User/getUser';
import { nextCookies } from 'better-auth/next-js';
import { warn } from 'console';
// import { Resend } from 'resend';
// import config from '@/services/config';

// export const resend = new Resend(config.resendApiKey);

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  basePath: '/api/auth',
  baseURL: process.env.BETTER_AUTH_URL!,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    // sendResetPassword: async ({ user, url }) => {
    //   await resend.emails.send({
    //     to: user.email,
    //     subject: 'Réinitialisation de votre mot de passe',
    //     // text: `Click the link to reset your password: ${url}`,
    //     html: `
    //       <h2>Réinitialisation de mot de passe</h2>
    //       <p>Bonjour ${user.name},</p>
    //       <p>Clique sur le lien ci-dessous pour réinitialiser ton mot de passe :</p>
    //       <a href="${url}" style="...">Réinitialiser mon mot de passe</a>
    //       <p>Ce lien expire dans 1 heure.</p>
    //       <p>Si tu n'as pas demandé cette réinitialisation, ignore cet email.</p>
    //     `,
    //     from: 'noreply@resend.climate-action-atlas.fr',
    //   });
    // },
    onPasswordReset: async ({ user }) => {
      // your logic here
      warn(`Password for user ${user.email} has been reset.`);
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    // sendVerificationEmail: async ({ user, url }) => {
    //   await resend.emails.send({
    //     from: 'noreply@resend.climate-action-atlas.fr',
    //     to: user.email,
    //     subject: 'Vérifie ton adresse email',
    //     html: `
    //     <h2>Bienvenue ${user.email} !</h2>
    //     <p>Clique sur le lien pour vérifier ton email :</p>
    //     <a href="${url}">Vérifier mon email</a>
    //   `,
    //   });
    // },
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
    nextCookies(),
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
  resetPasswordTokenExpiresIn: 3600,
});
