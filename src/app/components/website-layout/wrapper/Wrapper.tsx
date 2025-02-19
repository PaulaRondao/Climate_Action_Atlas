'use client';

import React from 'react';

import { Content } from './wrapper.styles';
import { Container } from '../../ui/global-styles/globalStyle.style';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Wrapper;
