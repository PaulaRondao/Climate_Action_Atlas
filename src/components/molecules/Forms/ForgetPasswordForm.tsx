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

export default function ForgetPasswordForm(): JSX.Element {
  const [loginError, setLoginError] = useState<string | null>(null);

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
  }, [errors, error, register]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>J&apos;ai oublié mon mot passe</h1>
      <p>
        Veuillez saisir votre email pour recevoir un mot de passe temporaire
        vous permettant d&apos;accéder à votre espace
      </p>
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
              name="email"
              placeholder="Ex. prenom.nom@mail.com"
              type="email"
              // icon="/icons/mail.svg"
              tabIndex={1}
            />
          </FormGroup>
          <Button
            color="blue"
            type="submit"
            // style={ButtonStyle.FILLED}
            disabled={!isValid}
            // extend
            tabIndex={3}
          >
            Valider
          </Button>
        </FormWrapper>
      </FormProvider>
    </FormContainer>
  );
}
