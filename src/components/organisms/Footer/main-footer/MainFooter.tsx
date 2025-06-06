'use client';

import React from 'react';
import Image from 'next/image';
import { MainFooterContainer, MainInfoContainer } from './mainFooter.styles';
import ContentInfo from '../content-info/ContentInfo';
import SVGIMG from '../../../../../public/logo/logo-climate-green.svg';

const MainFooter: React.FC = () => (
  <MainFooterContainer>
    <MainInfoContainer>
      <ContentInfo isMainFooter={true} />
    </MainInfoContainer>
    <Image src={SVGIMG} alt="Climate Action Atlas" width={140} height={70} />
  </MainFooterContainer>
);

export default MainFooter;
