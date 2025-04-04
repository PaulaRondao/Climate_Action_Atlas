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
  min-height: 100vh;
  background-color: ${theme.colors.backgroundBeige};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${theme.colors.backgroundBeige};
  border-top: 5px solid ${theme.colors.darkBlue};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: ${theme.spacing.lg};
  color: ${theme.colors.darkBlue};
  font-size: ${theme.typography.fontSizes.lg};
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Chargement...</LoadingText>
    </LoadingContainer>
  );
}
