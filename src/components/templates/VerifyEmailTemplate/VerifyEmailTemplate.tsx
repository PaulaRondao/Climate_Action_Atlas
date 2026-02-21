'use client';

import React from 'react';
import { Container } from '@/styles/components';
import { Navigation } from '@/components/organisms';
import { useSession } from '@/lib/auth-client';
import {
  MainContent,
  SignContainer,
} from '../SignInTemplate/signTemplate.styles';
import { VerifyEmailForm } from '@/components/molecules/Forms/VerifyEmailForm';

interface verificationEmailTemplateProps {
  email: string;
}

export default function VerifyEmailTemplate({
  email,
}: verificationEmailTemplateProps): JSX.Element {
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
      <Navigation session={isLoggedIn} />
      <SignContainer>
        <MainContent>
          <Container>
            <VerifyEmailForm email={email} />
          </Container>
        </MainContent>
      </SignContainer>
    </>
  );
}
