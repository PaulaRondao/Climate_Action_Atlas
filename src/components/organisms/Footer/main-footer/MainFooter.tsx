'use client';

import React from 'react';
import { MainFooterContainer, MainInfoContainer } from './mainFooter.styles';
import ContentInfo from '../content-info/ContentInfo';


const MainFooter: React.FC = () => (
  <MainFooterContainer>
    <MainInfoContainer>
      <ContentInfo isMainFooter={true} />
    </MainInfoContainer>
  </MainFooterContainer>
);

export default MainFooter;
