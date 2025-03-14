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
  color: ${theme.colors.darkBlue};
`;

const Title = styled.h1`
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
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.backgroundBeige};
  text-decoration: none;
  border-radius: ${theme.borderRadius.medium};
  transition: ${theme.transitions.default};

  &:hover {
    background-color: ${theme.colors.backgroundGreen};
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Désolé, la page que vous recherchez n&apos;existe pas.</Message>
      <HomeLink href="/">Retour à l&apos;accueil</HomeLink>
    </NotFoundContainer>
  );
}
