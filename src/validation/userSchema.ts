import * as z from 'zod';

export const userRegisterSchema = z
  .object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Adresse email invalide'),
    password: z
      .string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
      .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
      .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
      .regex(
        /[^A-Za-z0-9]/,
        'Le mot de passe doit contenir au moins un caractère spécial',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export type UserRegister = z.infer<typeof userRegisterSchema>;

export const userLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Veuillez renseigner votre email' })
    .email({ message: "format d'email invalide" }),
  password: z
    .string()
    .min(1, { message: 'Veuillez renseigner un mot de passe' }),
});

export type UserLogin = z.infer<typeof userLoginSchema>;

export const updateUserSchema = z
  .object({
    name: z.string().min(2).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'Ce champs ne peut être vide',
  });

export type UpdateUserBody = z.infer<typeof updateUserSchema>;

export const ResetPasswordFormSchema = z
  .object({
    token: z.string(),
    password: z
      .string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
      .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
      .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
      .regex(
        /[^A-Za-z0-9]/,
        'Le mot de passe doit contenir au moins un caractère spécial',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });
