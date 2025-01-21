'use client';

import React from 'react';
import { Container } from '../wrapper/wrapper.styles';
import { Title } from './header.styles';
import { PageTitle } from '../../../../../types/enums/pageTitle';
import { Description } from '../../../../../types/enums/description';
import Wrapper from '../wrapper/Wrapper';
import BackgroundLayout from '../background-image/BackgroundLayout';

interface HeaderProps {
  pageTitle?: PageTitle,
  description?: Description,
  backgroundImage?: string,
  backgroundImageSize?: string,
  backgroundPosition?: string,
}
export default function Header ({
  pageTitle = undefined,
  description = undefined,
  backgroundImage = '',
  backgroundImageSize = '',
  backgroundPosition = '',
}: HeaderProps) {

  return (
      <BackgroundLayout
        backgroundImage={backgroundImage}
        backgroundImageSize={backgroundImageSize}
        backgroundPosition={backgroundPosition}
      >
      <Container>
            <Title>
              {pageTitle}
            </Title>
            <Wrapper>
              {description}
            </Wrapper>
      </Container>
      </BackgroundLayout>
  );
};
