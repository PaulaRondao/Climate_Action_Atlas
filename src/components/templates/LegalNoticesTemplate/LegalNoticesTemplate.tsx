'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Footer } from '@/components/organisms';
import LegalNoticesPage from './LegalNoticesPage';


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

export default function LegalNoticesTemplate() {

  return (
    <>
      <PageWrapper>
        <ContentWrapper>
            <LegalNoticesPage></LegalNoticesPage>
        </ContentWrapper>
      </PageWrapper>
      <Footer />
    </>
  );
}