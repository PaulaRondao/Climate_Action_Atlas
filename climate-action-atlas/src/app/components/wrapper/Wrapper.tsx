import React from 'react';

import { Container, Content } from './wrapper.styles';

interface WrapperProps {
      children: React.ReactNode,
}

export default function Wrapper({
  children,
}: WrapperProps): JSX.Element {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
};