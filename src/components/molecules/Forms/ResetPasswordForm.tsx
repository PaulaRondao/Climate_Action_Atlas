'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { UserResetPassword } from '@/types/User';
import { FormGroup } from './initiative-form/initiativeCreationForm.styles';
import { FormContainer, FormWrapper, Input, Label } from './signForm.styles';
import { authClient } from '@/lib/auth-client';

const ResetPasswordFormSchema = z.object({
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
  token: z.string(),
});

export default function ResetPasswordForm(): JSX.Element {
  const [loginError, setLoginError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const reset = searchParams.get('reset');

  const token = new URLSearchParams(window.location.search).get('token');

  const methods = useForm<UserResetPassword>({
    resolver: zodResolver(ResetPasswordFormSchema),
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<UserResetPassword> = async ({
    password,
    token,
  }) => {
    await authClient.resetPassword({
      newPassword: password,
      token,
    });
  };

  // if valid router.push('/connexion')
  useEffect(() => {
    if (!token) {
      setLoginError(error);
    }
  }, [errors, error, reset]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Réinitialisation du mot de passe</h1>
      <FormProvider {...methods}>
        <FormWrapper>
          {loginError ? <h3>{loginError}</h3> : ''}

          <FormGroup>
            <Label htmlFor="token">Token</Label>
            <Input id="token" name="token" type="token" disabled>
              {token}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Nouveau mot de passe</Label>
            <Input
              id="password"
              name="password"
              placeholder="Saisissez votre de passe"
              type="password"
            />
          </FormGroup>
          <Button type="submit" disabled={!isValid}>
            Réinitialiser le mot de passe
          </Button>
        </FormWrapper>
      </FormProvider>
    </FormContainer>
  );
}
