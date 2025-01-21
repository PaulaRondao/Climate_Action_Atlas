'use client';

import React from 'react';
import Image from 'next/image';
import {
  MainFooterContainer,
  MainInfoContainer,
  Logo,
} from './mainFooter.styles';
import ContentInfo from '../content-info/ContentInfo';

const MainFooter : React.FC = () => (
  <MainFooterContainer>
      <Logo>
        <Image src="./svg/Climate-Action-Atlas.svg" alt="logo Climate Action Atlas" width={20} height={20} />
      </Logo>
    <MainInfoContainer>
      <ContentInfo isMainFooter={true} />
    </MainInfoContainer>
  </MainFooterContainer>
);

export default MainFooter;