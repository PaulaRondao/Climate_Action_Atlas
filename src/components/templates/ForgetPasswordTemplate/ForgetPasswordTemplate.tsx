'use client';

import React from 'react';
import { Container } from '@/styles/components';

import { Navigation } from '@/components/organisms';
import { useSession } from '@/lib/auth-client';
import ForgetPasswordForm from '@/components/molecules/Forms/ForgetPasswordForm';
import {
  MainContent,
  SignContainer,
} from '../SignInTemplate/signTemplate.styles';

export default function ForgetPasswordTemplate(): JSX.Element {
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
      <Navigation session={isLoggedIn} />
      <SignContainer>
        <MainContent>
          <Container>
            <ForgetPasswordForm />
          </Container>
        </MainContent>
      </SignContainer>
    </>
  );
}
