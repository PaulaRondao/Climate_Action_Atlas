'use client';

import React from 'react';
import { MainFooterContainer, MainInfoContainer } from './secondFooter.styles';
import ContentInfo from '../content-info/ContentInfo';

const SecondFooter: React.FC = () => (
  <MainFooterContainer>
    <MainInfoContainer>
      <ContentInfo isMainFooter={false} />
    </MainInfoContainer>
    <p>© 2024 Paula Rondao. All rights reserved.</p>
  </MainFooterContainer>
);

export default SecondFooter;
