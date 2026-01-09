'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Footer } from '@/components/organisms';
import LegacyPolicyPage from './LegacyPolicyPage';

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

  return (
    <>
      <PageWrapper>
        <ContentWrapper>
            <LegacyPolicyPage></LegacyPolicyPage>
        </ContentWrapper>
      </PageWrapper>
      <Footer />
    </>
  );
}