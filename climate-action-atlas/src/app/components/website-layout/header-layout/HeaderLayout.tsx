'use client';

import React from 'react';
import AppHead from '../../modules/appHead/AppHead';
import Navbar from '../../modules/navbar/Navbar';

interface HeaderLayoutProps {
  title: string,
  connected?: boolean,
  metaTag?: string,
  canonical?: string,
}

export default function HeaderLayout ({
  title,
  connected = false,
  metaTag = '',
  canonical = '',
}: HeaderLayoutProps) {
  return (
    <>
      <AppHead title={title} metaTag={metaTag} canonical={canonical} />
        <header>
          <Navbar
          // connected={connected}
          // user={user}
          // empty={emptyNavBar}
          // steps={steps}
          // activeStep={activeStep}
          />
        </header>
    </>
  );
};
