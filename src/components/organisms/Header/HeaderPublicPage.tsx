'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';
import { PageTitle, Description } from '@/constants/enums';
import BackgroundLayout from '../../shared/BackgroundLayout/BackgroundLayout';

const WelcomeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${theme.spacing.xl};
  gap: ${theme.spacing.xl};
  transform: translateY(50%);
  color: var(--color-background-beige);

  p {
    font-weight: bold;
    font-size: var(--text-md);
  }

  h1 {
    text-align: center;
  }

  ${mediaQueries.desktop} {
    max-width: 77%;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 0 ${theme.spacing.md};
  flex: 0 0 auto;
  text-align: center;

  ${mediaQueries.desktop} {
    p {
      padding: 0 ${theme.spacing.xxl};
    }
  }
`;

interface HeaderPublicPageProps {
  pageTitle?: PageTitle;
  description?: Description;
}

export default function HeaderPublicPage({
  pageTitle = undefined,
  description = undefined,
}: HeaderPublicPageProps) {
  return (
    <BackgroundLayout imageSrc="/images/Header.png" imageAlt="">
      <WelcomeSection>
        <h1>{pageTitle}</h1>
        <Wrapper>
          <p>{description}</p>
        </Wrapper>
      </WelcomeSection>
    </BackgroundLayout>
  );
}
