'use client';

import React from 'react';
import { Container } from '@/styles/components';
import { MainContent, SignContainer } from '../SignInTemplate/signTemplate.styles';
import RegisterForm from '@/components/molecules/Forms/RegisterForm';
import { Footer } from '@/components/organisms';

export default function RegisterTemplate() {
  return (
    <>
      <SignContainer $backgroundImage="/images/glacier.jpg">
        <MainContent>
          <Container>
            <RegisterForm />
          </Container>
        </MainContent>
      </SignContainer>
      <Footer />
    </>
  );
}
