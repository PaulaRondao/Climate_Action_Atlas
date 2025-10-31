'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { UserLoginForm } from '@/types/User';

const Input = styled.input`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.darkBlue};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.md};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.backgroundGreen};
    box-shadow: 0 0 0 2px rgba(110, 231, 183, 0.2);
  }
`;

const Label = styled.label`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: 500;
`;

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
  const [showRegisterPopup, setShowRegisterPopup] = useState<boolean>(false);

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
      callbackUrl: '/',
      redirect: true,
    });
  };

  useEffect(() => {
    setLoginError(error);
    if (register) {
      setShowRegisterPopup(true);
    }
  }, [errors, error, register]);

  return (
    <div className="p-2 container mx-auto w-full">
      <h1 className="mt-6">Bienvenue !</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="py-10">
            {loginError ? (
              <h3 className="text-center font-semibold rounded-md py-1 my-2 text-red">
                {loginError}
              </h3>
            ) : (
              ''
            )}

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Ex. prenom.nom@mail.com"
              type="email"
              // icon="/icons/mail.svg"
              tabIndex={1}
            />
            <Label htmlFor="mot de passe">Mot de passe</Label>
            <Input
              id="password"
              // labelLink={{
              //   label: 'Mot de passe oublié',
              //   redirect: '/authentification/mot-de-passe-oublie',
              // }}
              name="password"
              placeholder="Mot de passe"
              type="password"
              // icon="/icons/lock.svg"
              tabIndex={2}
            />
            <div className="text-sm mt-4 text-center">
              Envie de nous rejoindre ?{' '}
              <button
                className="text-blue font-bold underline"
                type="button"
                // onClick={() => setShowRegisterPopup(true)}
              >
                Créer un compte
              </button>
            </div>
            <div className="mt-6">
              <Button
                color="blue"
                type="submit"
                // style={ButtonStyle.FILLED}
                disabled={!isValid}
                // extend
                tabIndex={3}
              >
                Connexion
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
