'use client';

import React from 'react';

import { Content } from '../wrapper/wrapper.styles';
import { Container } from '../../globalStyle.styles';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Wrapper;