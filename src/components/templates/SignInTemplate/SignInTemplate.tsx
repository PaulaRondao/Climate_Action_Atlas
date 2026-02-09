'use client';

import React from 'react';
import SignInForm from '@/components/molecules/Forms/SignInForm';
import { Container } from '@/styles/components';
import { MainContent, SignContainer } from './signTemplate.styles';
import { Navigation } from '@/components/organisms';
import { useSession } from '@/lib/auth-client';

export default function SignInTemplate(): JSX.Element {
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
      <Navigation session={isLoggedIn} />
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
