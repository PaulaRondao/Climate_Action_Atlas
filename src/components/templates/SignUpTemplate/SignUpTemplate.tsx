'use client';

import React from 'react';
import styled from 'styled-components';
import SignUpForm from '@/components/molecules/Form/SignUpForm';
import { Container } from '@/styles/components';
import { theme } from '@/styles/theme';
import { Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/constants/enums';

const SignUpContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${theme.colors.darkBlue};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/Header.png');
    background-size: cover;
    background-position: center;
    opacity: 0.7;
    z-index: 0;
  }
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: ${theme.spacing.xl} 0;
`;

export default function SignUpTemplate() {
  return (
    <>
      <Navigation
        pageTitle={PageTitle.UserForm}
        description={Description.CommitmentToUser}
      />
      <SignUpContainer>
        <MainContent>
          <Container>
            <SignUpForm />
          </Container>
        </MainContent>
      </SignUpContainer>
    </>
  );
}
