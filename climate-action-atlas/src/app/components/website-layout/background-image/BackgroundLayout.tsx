import React from 'react';

interface BackgroundLayoutProps {
  backgroundImage: string;
  backgroundImageSize: string;
  backgroundPosition: string;
  children: React.ReactNode;
}

export default function BackgroundLayout ({
  backgroundImage,
  backgroundImageSize,
  backgroundPosition,
  children,
}:BackgroundLayoutProps ) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: backgroundImageSize,
    backgroundPosition: backgroundPosition,
  };

  return <div style={backgroundStyle}>{children}</div>;
};