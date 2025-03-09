'use client';

import React from 'react';
import { BackgroundContainer, BackgroundImage } from './backgroundLayout.styles';

interface BackgroundLayoutProps {
  width: number | `${number}`;
  height: number | `${number}`;
  src: string;
  children: React.ReactNode;
}

export default function BackgroundLayout({
  width,
  height,
  src,
  children,
}: BackgroundLayoutProps) {
  return (
    <BackgroundContainer>
      <picture>
        <source width={width} height={height}></source>
        <BackgroundImage alt="" width={width} height={height} src={src} />
      </picture>
      {children}
    </BackgroundContainer>
  );
}