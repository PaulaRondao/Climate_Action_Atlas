'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { UserLoginForm } from '@/types/User';
import { FormGroup } from './initiative-form/initiativeCreationForm.styles';
import { FormContainer, FormWrapper, Input, Label } from './signForm.styles';

const UserFormRegistration = z.object({
  email: z
    .string()
    .min(1, { message: 'Veuillez renseigner votre email' })
    .email({ message: "format d'email invalide" }),
  password: z
    .string()
    .min(1, { message: 'Veuillez renseigner un mot de passe' }),
});

export default function SignInForm(): JSX.Element {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showRegisterIndication, setShowRegisterIndication] =
    useState<boolean>(false);

  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const register = searchParams.get('register');

  const methods = useForm<UserLoginForm>({
    resolver: zodResolver(UserFormRegistration),
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<UserLoginForm> = async ({
    email,
    password,
  }) => {
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
      redirect: true,
    });
  };

  useEffect(() => {
    setLoginError(error);
    if (register) {
      setShowRegisterIndication(true);
    }
  }, [errors, error, register]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Connexion</h1>
      {showRegisterIndication && (
        <p>
          Votre compte a été créé avec succès ! Vous pouvez maintenant vous
          connecter
        </p>
      )}
      <FormProvider {...methods}>
        <FormWrapper>
          {loginError ? (
            <h3 className="text-center font-semibold rounded-md py-1 my-2 text-red">
              {loginError}
            </h3>
          ) : (
            ''
          )}

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...methods.register('email')}
              name="email"
              placeholder="Ex: prenom.nom@mail.com"
              type="email"
              tabIndex={1}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mot de passe">Mot de passe</Label>
            <Input
              id="password"
              {...methods.register('password')}
              name="password"
              placeholder="Mot de passe"
              type="password"
              tabIndex={2}
            />
          </FormGroup>
          <a href="/mot-de-passe-oublie">Mot de passe oublié ?</a>
          <Button type="submit" disabled={!isValid} tabIndex={3}>
            Me connecter
          </Button>
        </FormWrapper>
      </FormProvider>
    </FormContainer>
  );
}
