'use client';

import { Footer, Navigation } from '@/components/organisms';
import styled from 'styled-components';

const Main = styled('main')(({ theme }) => ({
  minHeight: '100vh',
}));

const DashboardPage = () => {
  return (
    <>
      <Navigation />
      <Main>
        <h1>Bienvenue sur votre espace personnel</h1>
      </Main>
      <Footer />
    </>
  );
};

export default DashboardPage;
