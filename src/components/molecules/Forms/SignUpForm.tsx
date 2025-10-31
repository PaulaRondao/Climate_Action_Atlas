'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Button } from '@/components/atoms';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  max-width: 500px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundBeige};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const Label = styled.label`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: 500;
`;

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

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: ${theme.typography.fontSizes.sm};
`;

const GlobalError = styled(ErrorMessage)`
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const signUpSchema = z
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

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const [globalError, setGlobalError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
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

      // Redirection vers la page d'accueil après inscription réussie
      window.location.href = '/connexion';
    } catch (error) {
      console.error('Erreur:', error);
      setGlobalError('Une erreur est survenue lors de la connexion au serveur');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {globalError && <GlobalError>{globalError}</GlobalError>}

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

export default SignUpForm;
