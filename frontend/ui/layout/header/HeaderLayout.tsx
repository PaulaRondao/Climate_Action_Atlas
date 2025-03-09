
'use client';

import React from 'react';
import AppHead from '../../../components/public-pages/appHead/AppHead';
import Navbar from '../../../components/public-pages/navbar/Navbar';

interface HeaderLayoutProps {
  title: string;
  connected?: boolean;
  metaTag?: string;
  canonical?: string;
}

export default function HeaderLayout({
  title,
  connected = false,
  metaTag = '',
  canonical = '',
}: HeaderLayoutProps) {
  return (
    <>
      <AppHead title={title} metaTag={metaTag} canonical={canonical} />
      <Navbar
      // connected={connected}
      // user={user}
      // empty={emptyNavBar}
      // steps={steps}
      // activeStep={activeStep}
      />
    </>
  );
}
