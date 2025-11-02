'use client';

import React from 'react';
import SignUpForm from '@/components/molecules/Forms/RegisterForm';
import { Container } from '@/styles/components';
import { Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/types/enums/enums';
import {
  MainContent,
  SignContainer,
} from '../SignInTemplate/signTemplate.styles';
import RegisterForm from '@/components/molecules/Forms/RegisterForm';

export default function RegisterTemplate() {
  return (
    <>
      <Navigation
        pageTitle={PageTitle.UserForm}
        description={Description.CommitmentToUser}
      />
      <SignContainer $backgroundImage="/images/glacier.jpg">
        <MainContent>
          <Container>
            <RegisterForm />
          </Container>
        </MainContent>
      </SignContainer>
    </>
  );
}
