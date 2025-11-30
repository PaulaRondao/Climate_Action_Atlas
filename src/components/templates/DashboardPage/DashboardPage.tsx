'use client';

import { Navigation } from '@/components/organisms';
import { Wrapper } from '@/components/shared';
import useCustomSession from '@/hooks/useCustomSession';
import styled from 'styled-components';

const Main = styled('main')(({ theme }) => ({
  minHeight: '100vh',
}));

const DashboardPage = () => {
  const { data: session, status } = useCustomSession();

  if (session && status === 'authenticated') {
    return (
      <>
        <Navigation connected />
        <Main>
          <Wrapper>
            <h1>Bienvenue, {session.user?.name} sur votre espace personnel</h1>
          </Wrapper>
        </Main>
      </>
    );
  }
};

export default DashboardPage;
