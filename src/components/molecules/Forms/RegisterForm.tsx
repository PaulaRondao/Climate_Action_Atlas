'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Button } from '@/components/atoms';
import { FormContainer, FormGroup, Input, Label } from './signForm.styles';
import { UserRegister } from '@/types/User';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import SignUpLoading from '@/app/inscription/loading';
import { userRegisterSchema } from '@/validation/userSchema';

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: ${theme.typography.fontSizes.sm};
`;

const GlobalError = styled(ErrorMessage)`
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const RegisterForm = () => {
  const router = useRouter();
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<UserRegister> = async (data) => {
    await authClient.signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.name,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          router.push('/profil');
        },
        onError: (ctx) => {
          setIsLoading(false);
          setGlobalError("Une erreur est survenue lors de l'inscription");
          alert(ctx.error.message);
        },
      },
    );
  };

  return (
    <>
      {isLoading ? (
        <SignUpLoading />
      ) : (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          {globalError && <GlobalError>{globalError}</GlobalError>}
          <h1>Bienvenue ! </h1>
          <p>Tous les champs du formulaire sont obligatoires</p>
          <FormGroup>
            <Label htmlFor="name">Nom d'utilisateur·trice</Label>
            <Input
              id="name"
              type="text"
              {...register('name')}
              placeholder="Saisissez votre nom d'utilisateur·trice"
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <span>(format attendu : exemple@mail.fr)</span>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="Saisissez votre adresse email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Mot de passe</Label>
            <span>
              Votre mot de passe doit contenir au moins 8 caractères, une
              majuscule, un chiffre et un caractère spécial
            </span>
            <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder="Saisissez votre mot de passe"
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
            <Input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirmez votre mot de passe"
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </FormGroup>

          <Button type="submit" disabled={!isValid} fullWidth>
            S'inscrire
          </Button>
        </FormContainer>
      )}
    </>
  );
};

export default RegisterForm;
