'use client';

import React, { useEffect } from 'react';
import SignInForm from '@/components/molecules/Forms/SignInForm';
import { Container } from '@/styles/components';
import { Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/types/enums/enums';
import { MainContent, SignContainer } from './signTemplate.styles';

export default function SignInTemplate(): JSX.Element {
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
