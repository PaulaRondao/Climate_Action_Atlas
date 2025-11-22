'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Button } from '@/components/atoms';
import { FormContainer, FormGroup, Input, Label } from './signForm.styles';
import { UserRegister } from '@/types/User';
import { useRouter } from 'next/navigation';

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: ${theme.typography.fontSizes.sm};
`;

const GlobalError = styled(ErrorMessage)`
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'Le prénom doit contenir au moins 2 caractères'),
    lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    userName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
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

const RegisterForm = () => {
  const router = useRouter();
  const [globalError, setGlobalError] = useState<string | null>(null);

  const methods = useForm<UserRegister>({
    resolver: zodResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<UserRegister> = async (data) => {
    try {
      setGlobalError(null);
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setGlobalError(
          result.error || "Une erreur est survenue lors de l'inscription",
        );
        return;
      }

      if (response.ok) {
        setTimeout(() => {
          router.push('/connexion');
        }, 2000);
      }
    } catch (error) {
      console.error(error, 'Erreur de connexion');
      setGlobalError('Une erreur est survenue lors de la connexion au serveur');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {globalError && <GlobalError>{globalError}</GlobalError>}
      <h1>Bienvenue !</h1>
      <p>Veuillez saisir vos informations pour la création de votre espace</p>
      <FormGroup>
        <Label htmlFor="firstName">Prénom</Label>
        <Input
          id="firstName"
          type="text"
          {...register('firstName')}
          placeholder="Votre prénom"
        />
        {errors.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="lastName">Nom</Label>
        <Input
          id="lastName"
          type="text"
          {...register('lastName')}
          placeholder="Votre nom"
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="userName">Nom d&apos;utilisateur·trice</Label>
        <span>
          Saisissez un nom que vous pourrez utiliser dans l&apos;application
        </span>
        <Input
          id="userName"
          type="text"
          {...register('userName')}
          placeholder="Nom d'utilisateur·trice"
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="votre@email.com"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Mot de passe</Label>
        <span>
          Votre mot de passe doit contenir au moins 8 caractères, une majuscule,
          un chiffre et un caractère spécial
        </span>
        <Input
          id="password"
          type="password"
          {...register('password')}
          placeholder="Votre mot de passe"
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

      <Button type="submit" fullWidth>
        S&apos;inscrire
      </Button>
    </FormContainer>
  );
};

export default RegisterForm;
