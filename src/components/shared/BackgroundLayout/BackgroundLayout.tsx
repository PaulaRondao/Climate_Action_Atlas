'use client';

import React from 'react';
import Image from 'next/image';
import {
  BackgroundContainer,
  BackgroundImage,
  Content,
} from './backgroundLayout.styles';

interface BackgroundLayoutProps {
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({
  children,
  imageSrc,
  imageAlt = 'Background image',
}) => {
  return (
    <BackgroundContainer>
      {imageSrc && (
        <BackgroundImage>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            quality={100}
            style={{ objectFit: 'cover' }}
          />
        </BackgroundImage>
      )}
      <Content>{children}</Content>
    </BackgroundContainer>
  );
};

export default BackgroundLayout;
