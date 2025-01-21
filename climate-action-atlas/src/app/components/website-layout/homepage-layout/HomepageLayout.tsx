'use client';

import React from 'react';
import HeaderLayout from '../header-layout/HeaderLayout';
import { PageTitle } from '../../../../../types/enums/pageTitle';
import { Description } from '../../../../../types/enums/description';
import MainLayout from '../main-layout/MainLayout';
import Footer from '../../modules/footer/Footer';


interface HomepageLayoutProps {
  title: string,
  canonical?: string,
  pageTitle?: PageTitle,
  description?: Description,
  children: React.ReactNode,
}
export default function HomepageLayout ({
  title,
  canonical = '',
  pageTitle = undefined,
  description = undefined,
  children,
}: HomepageLayoutProps) {
  return (
  <>
    <HeaderLayout
      title={title}
      canonical={canonical}
    >
    </HeaderLayout>
    <MainLayout
      pageTitle={pageTitle}
      description={description}
      >
      {children}
    </MainLayout>
    <Footer />
    </>
  );
};