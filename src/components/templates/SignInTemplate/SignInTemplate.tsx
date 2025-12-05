'use client';

import React, { useEffect } from 'react';
import SignInForm from '@/components/molecules/Forms/SignInForm';
import { Container } from '@/styles/components';
import { MainContent, SignContainer } from './signTemplate.styles';
import { Footer } from '@/components/organisms';

export default function SignInTemplate(): JSX.Element {
  return (
    <>
      <SignContainer $backgroundImage="/images/topographic-map.jpg">
        <MainContent>
          <Container>
            <SignInForm />
          </Container>
        </MainContent>
      </SignContainer>
      <Footer />
    </>
  );
}
