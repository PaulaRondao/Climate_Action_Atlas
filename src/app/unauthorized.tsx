'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '@/styles/theme';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundBeige};
  color: ${theme.colors.green};
`;

export const Title = styled.h1`
  font-size: ${theme.typography.fontSizes.xxxl};
  margin-bottom: ${theme.spacing.lg};
`;

const Message = styled.p`
  font-size: ${theme.typography.fontSizes.lg};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`;

const HomeLink = styled(Link)`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundGreen};
  color: ${theme.colors.backgroundBeige};
  text-decoration: none;
  border: 2px solid ${theme.colors.green};
  border-radius: ${theme.borderRadius.medium};
  transition: ${theme.transitions.default};
  font-weight: 600;

  &:hover {
    border: 2px solid ${theme.colors.green};
    background-color: ${theme.colors.backgroundBeige};
    color: ${theme.colors.green};
  }
`;

export default function unauthorizedPage() {
  return (
    <NotFoundContainer>
      <Title>401</Title>
      <Message>Désolé, vous n'êtes pas autorisé à accéder à cette page</Message>
      <HomeLink href="/">Retour à l'accueil</HomeLink>
    </NotFoundContainer>
  );
}
