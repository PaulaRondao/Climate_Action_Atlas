'use client';

import Loading from '@/app/loading';
import { Footer } from '@/components/organisms';
import { Wrapper } from '@/components/shared';
import useCustomSession from '@/hooks/useCustomSession';
import { Session } from 'next-auth';
import styled from 'styled-components';

const Main = styled('main')(({ theme }) => ({
  minHeight: '100vh',
}));

interface DashboardPageProps {
  initialSession: Session | null;
}

const DashboardPage = ({ initialSession }: DashboardPageProps) => {
  const { data: session, status } = useCustomSession();
  const displaySession = session ?? initialSession;

  const displayLoading = status === 'loading' && !displaySession;
  const authenticatedUser = status === 'authenticated' && displaySession;

  return (
    <>
      <Main>
        <Wrapper>
          {displayLoading && <Loading />}
          {authenticatedUser && (
            <h1>
              Bienvenue, {displaySession?.user?.name} sur votre espace personnel
            </h1>
          )}
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
};

export default DashboardPage;
