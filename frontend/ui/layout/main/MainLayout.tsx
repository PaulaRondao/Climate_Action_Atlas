'use client';

import React from 'react';
import { PageTitle } from '../../../../types/enums/pageTitle';
import Header from '../header/Header';
import { Description } from '../../../../types/enums/description';

interface MainLayoutProps {
  pageTitle?: PageTitle;
  description?: Description;
}

export default function MainLayout({
  pageTitle = undefined,
  description = undefined,
}: MainLayoutProps) {
  return (
    <>
      <Header pageTitle={pageTitle} description={description} />
    </>
  );
}