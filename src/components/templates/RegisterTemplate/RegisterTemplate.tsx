'use client';

import React from 'react';
import { Container } from '@/styles/components';
import {
  MainContent,
  SignContainer,
} from '../SignInTemplate/signTemplate.styles';
import RegisterForm from '@/components/molecules/Forms/RegisterForm';
import { Navigation } from '@/components/organisms';
import { useSession } from '@/lib/auth-client';

export default function RegisterTemplate() {
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
      <Navigation session={isLoggedIn} />
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
