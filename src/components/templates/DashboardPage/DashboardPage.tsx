'use client';

import Loading from '@/app/loading';
import Card from '@/components/molecules/Card/Card/Card';
import Table from '@/components/molecules/Table/Table';
import { Footer } from '@/components/organisms';
import { Wrapper } from '@/components/shared';
import useCustomSession from '@/hooks/useCustomSession';
import { Session } from 'next-auth';
import Image from 'next/image';
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
          <Table></Table>
          <Card
            title="Suppression de compte"
            message="Une fois votre compte supprimé, toutes vos données seront
              définitivement effacées. Cette action est irréviersible."
          ></Card>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
};

export default DashboardPage;
