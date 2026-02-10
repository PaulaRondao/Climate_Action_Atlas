'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { UserResetPassword } from '@/types/User';
import {
  ErrorMessage,
  FormGroup,
} from './initiative-form/initiativeCreationForm.styles';
import {
  FormContainer,
  Input,
  Label,
  PasswordWrapper,
} from './signForm.styles';
import { authClient } from '@/lib/auth-client';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { ResetPasswordFormSchema } from '@/validation/userSchema';

export default function ResetPasswordForm(): JSX.Element {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const reset = searchParams.get('reset');

  const token = new URLSearchParams(window.location.search).get('token');

  const methods = useForm<UserResetPassword>({
    resolver: zodResolver(ResetPasswordFormSchema),
    mode: 'all',
  });

  const {
    register,
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
        {loginError ? <h3>{loginError}</h3> : ''}

        <FormGroup>
          <Label htmlFor="token">Token</Label>
          <Input id="token" name="token" type="token" disabled>
            {token}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Nouveau mot de passe</Label>
          <PasswordWrapper>
            <Input
              id="password"
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
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">
            Confirmer votre nouveau mot de passe
          </Label>
          <PasswordWrapper>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              placeholder="Confirmez votre mot de passe"
            />
            <button
              type="button"
              aria-label="Montrer le mot de passe"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
          </PasswordWrapper>
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}
        </FormGroup>
        <Button type="submit" disabled={!isValid}>
          Réinitialiser le mot de passe
        </Button>
      </FormProvider>
    </FormContainer>
  );
}
