'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Button } from '@/components/atoms';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundBeige};
  border-radius: ${theme.borderRadius.medium};
  margin: ${theme.spacing.xl} auto;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ErrorTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.darkBlue};
`;

const ErrorMessage = styled.p`
  font-size: ${theme.typography.fontSizes.md};
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.red};
  text-align: center;
`;

export default function SignUpError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorContainer>
      <ErrorTitle>Erreur lors de l&apos;inscription</ErrorTitle>
      <ErrorMessage>
        {error.message || "Une erreur s'est produite lors de l'inscription. Veuillez réessayer."}
      </ErrorMessage>
      <Button onClick={reset}>Réessayer</Button>
    </ErrorContainer>
  );
}
