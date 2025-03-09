'use client';

import React from 'react';
import {
  TitleSection,
  WelcomeSection,
  Wrapper,
} from './headerPublicPage.styles';
import { PageTitle } from '../../../../types/enums/pageTitle';
import { Description } from '../../../../types/enums/description';
import BackgroundLayout from '../background-image/BackgroundLayout';
import { Container } from '../../globalStyle.styles';

interface HeaderPublicPageProps {
  pageTitle?: PageTitle;
  description?: Description;
}

export default function HeaderPublicPage({
  pageTitle = undefined,
  description = undefined,
}: HeaderPublicPageProps) {
  return (
    <BackgroundLayout width={1920} height={500} src="/images/Header.png">
      <WelcomeSection>
        <h1>{pageTitle}</h1>
        <Wrapper>
          <p>{description}</p>
        </Wrapper>
      </WelcomeSection>
    </BackgroundLayout>
  );
}
