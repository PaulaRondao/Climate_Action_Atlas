import React, { ReactNode } from 'react';
import { Container } from '../wrapper/wrapper.styles';
import { Background, Title } from './header.styles';
import { PageTitle } from '../../../../../types/enums/page';
import { Description } from '../../../../../types/enums/description';
import Wrapper from '../wrapper/Wrapper';


interface HeaderProps {
  pageTitle?: PageTitle,
  description?: Description,
  backgroundImage?: string,
  backgroundImageSize?: string,
  backgroundPosition?: string,
}
export default function Header ({
  pageTitle,
  description,
  backgroundImage,
  backgroundImageSize,
  backgroundPosition,
}: HeaderProps): JSX.Element {

  return (
      <Background
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
      </Background>
  );
};

Header.default = {
  title: null,
  description: null,
  backgroundImage: null,
  backgroundImageSize: null,
  backgroundPosition: null,
}
