'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
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

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${theme.colors.backgroundBeige};
  border-top: 4px solid ${theme.colors.darkBlue};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: ${theme.spacing.lg};
  color: ${theme.colors.darkBlue};
  font-size: ${theme.typography.fontSizes.md};
`;

export default function SignUpLoading() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Inscription en cours...</LoadingText>
    </LoadingContainer>
  );
}
