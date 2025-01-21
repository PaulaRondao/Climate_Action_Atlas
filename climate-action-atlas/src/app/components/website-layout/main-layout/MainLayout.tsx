'use client';

import React from 'react';
import { PageTitle } from '../../../../../types/enums/pageTitle';
import Wrapper from '../wrapper/Wrapper';
import Header from '../header/Header';
import { Description } from '../../../../../types/enums/description';

interface MainLayoutProps {
  children: React.ReactNode,
  pageTitle?: PageTitle,
  description?: Description,
}

export default function MainLayout ({
  children,
  pageTitle = undefined,
  description = undefined,
}: MainLayoutProps) {
  return (
    <>
        <main>
          <Header 
            pageTitle={pageTitle}
            description={description}
          />
          <Wrapper>{children}</Wrapper>
        </main>
    </>
  );
};