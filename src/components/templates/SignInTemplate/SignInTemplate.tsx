'use client';

import React from 'react';
import SignInForm from '@/components/molecules/Forms/SignInForm';
import { Container } from '@/styles/components';
import { Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/types/enums/enums';
import { MainContent, SignContainer } from './signTemplate.styles';

export default function SignInTemplate() {
  return (
    <>
      <Navigation
        pageTitle={PageTitle.UserForm}
        description={Description.CommitmentToUser}
      />
      <SignContainer $backgroundImage="/images/topographic-map.jpg">
        <MainContent>
          <Container>
            <SignInForm />
          </Container>
        </MainContent>
      </SignContainer>
    </>
  );
}
