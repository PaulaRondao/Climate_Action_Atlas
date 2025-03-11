'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Navigation } from '@/components/organisms';
import { Header } from '@/components/organisms';
import { Footer } from '@/components/organisms';

const Main = styled('main')(({ theme }) => ({
  minHeight: '100vh',
}));

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  description,
}) => {
  return (
    <>
      <Navigation />
      <Header pageTitle={pageTitle} description={description} />
      <Main>
        <Container maxWidth="lg">{children}</Container>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
