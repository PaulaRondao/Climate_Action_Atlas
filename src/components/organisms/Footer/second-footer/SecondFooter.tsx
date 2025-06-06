'use client';

import React from 'react';
import {
  CopyrightText,
  SecondFooterContainer,
} from './secondFooter.styles';
import ContentInfo from '../content-info/ContentInfo';

const SecondFooter: React.FC = () => (
  <SecondFooterContainer>
    <CopyrightText>© 2024 Paula Rondao. All rights reserved.</CopyrightText>
  </SecondFooterContainer>
);

export default SecondFooter;
