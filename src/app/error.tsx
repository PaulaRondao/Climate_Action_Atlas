'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundBeige};
  color: ${theme.colors.white};
`;

const ErrorTitle = styled.h1`
  font-size: ${theme.typography.fontSizes.xxl};
  margin-bottom: ${theme.spacing.lg};
`;

const ErrorMessage = styled.p`
  font-size: ${theme.typography.fontSizes.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const RetryButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundGreen};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  transition: ${theme.transitions.default};

  &:hover {
    background-color: ${theme.colors.fluoGreen};
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorContainer>
      <ErrorTitle>Une erreur est survenue</ErrorTitle>
      <ErrorMessage>{error.message || "Quelque chose s'est mal passé"}</ErrorMessage>
      <RetryButton onClick={reset}>Réessayer</RetryButton>
    </ErrorContainer>
  );
}
