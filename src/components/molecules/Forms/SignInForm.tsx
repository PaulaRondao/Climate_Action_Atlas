'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { UserLogin } from '@/types/User';
import { FormGroup } from './initiative-form/initiativeCreationForm.styles';
import {
  FormContainer,
  Input,
  Label,
  PasswordWrapper,
} from './signForm.styles';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { userLoginSchema } from '@/validation/userSchema';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

export default function SignInForm(): JSX.Element {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const methods = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<UserLogin> = async ({ email, password }) => {
    setLoading(true);

    await authClient.signIn.email({
      email,
      password,
      callbackURL: '/profil',
      rememberMe: false,
    });
  };

  useEffect(() => {
    setLoginError(error);
  }, [errors, error]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Connexion</h1>
      <FormProvider {...methods}>
        {loginError ? <h3>{loginError}</h3> : ''}

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...methods.register('email')}
            name="email"
            placeholder="Saisissez votre email"
            type="email"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="mot de passe">Mot de passe</Label>
          <PasswordWrapper>
            <Input
              id="password"
              {...methods.register('password')}
              name="password"
              placeholder="Saisissez votre de passe"
              type="password"
            />
            <button
              type="button"
              aria-label="Montrer le mot de passe"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
          </PasswordWrapper>
        </FormGroup>

        <Link href="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
        {loading ? (
          <Button
            type="submit"
            disabled
            backgroundColorHover="none"
            colorHover="none"
          >
            Connexion en cours
          </Button>
        ) : (
          <Button type="submit" disabled={!isValid}>
            Me connecter
          </Button>
        )}
      </FormProvider>
    </FormContainer>
  );
}
