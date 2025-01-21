'use client';

import React from 'react';

import { Container, Content } from './wrapper.styles';

interface WrapperProps {
  children: React.ReactNode,
}

const Wrapper : React.FC<WrapperProps> = ({
  children,
}) => (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );

export default Wrapper;