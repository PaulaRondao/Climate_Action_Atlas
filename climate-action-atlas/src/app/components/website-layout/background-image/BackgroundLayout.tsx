'use client'

import React from 'react';
import { BackgroundContainer, BackgroundImage } from './backgroundLayout.style';
import Image from 'next/image';
import { Container } from '../../ui/global-styles/globalStyle.style';

interface BackgroundLayoutProps {
  width: number | `${number}`,
  height: number | `${number}`,
  src: string,
  children: React.ReactNode,

}

export default function BackgroundLayout ({
  width,
  height,
  src,
  children,
}:BackgroundLayoutProps ) {
  return (
  <BackgroundContainer>
    <picture>
      <source width={width} height={height}></source>
      <BackgroundImage alt='' width={width} height={height} src={src} />
    </picture>
    {children}
  </BackgroundContainer>
  );
};