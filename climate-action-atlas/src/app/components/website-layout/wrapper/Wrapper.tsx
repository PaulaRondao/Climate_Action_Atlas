import React from 'react';

import { Container, Content } from './wrapper.styles';

interface WrapperProps {
      children: React.ReactNode,
}

const Wrapper = ({
  children,
}: WrapperProps): JSX.Element => (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );

export default Wrapper;