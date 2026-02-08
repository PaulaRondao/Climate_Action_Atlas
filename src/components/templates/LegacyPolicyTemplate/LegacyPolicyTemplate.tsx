'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import LegacyPolicyPage from './LegacyPolicyPage';
import { useSession } from '@/lib/auth-client';
import { Navigation } from '@/components/organisms';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.backgroundBeige};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function LegacyPolicyTemplate() {
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
      <Navigation session={isLoggedIn} />
      <PageWrapper>
        <ContentWrapper>
          <LegacyPolicyPage></LegacyPolicyPage>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}
