'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { UserForgetPassword } from '@/types/User';
import { FormGroup } from './initiative-form/initiativeCreationForm.styles';
import { FormContainer, FormWrapper, Input, Label } from './signForm.styles';
import { authClient } from '@/lib/auth-client';

const ForgetPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Veuillez renseigner votre email' })
    .email({ message: "format d'email invalide" }),
});

export default function ForgetPasswordForm(): JSX.Element {
  const [loginError, setLoginError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const register = searchParams.get('register');

  const methods = useForm<UserForgetPassword>({
    resolver: zodResolver(ForgetPasswordFormSchema),
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<UserForgetPassword> = async ({ email }) => {
    await authClient.requestPasswordReset({
      email,
      redirectTo: '/reinitialisation-mot-de-passe',
    });
  };

  useEffect(() => {
    setLoginError(error);
  }, [errors, error, register]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Mot de passe oublié</h1>
      <p>
        Veuillez saisir votre email pour recevoir un mot de passe temporaire.
      </p>
      <FormProvider {...methods}>
        <FormWrapper>
          {loginError ? <h3>{loginError}</h3> : ''}

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Ex. prenom.nom@mail.com"
              type="email"
            />
          </FormGroup>
          <Button type="submit" disabled={!isValid}>
            Envoyer un mot de passe temporaire
          </Button>
        </FormWrapper>
      </FormProvider>
    </FormContainer>
  );
}
