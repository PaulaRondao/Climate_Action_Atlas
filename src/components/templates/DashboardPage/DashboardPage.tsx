'use client';

import Loading from '@/app/loading';
import DeleteCard from '@/components/molecules/Card/Delete-Card/DeleteCard';
import Table from '@/components/molecules/Table/Table';
import { Navigation } from '@/components/organisms';
import { Wrapper } from '@/components/shared';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

const Main = styled('main')(() => ({
  minHeight: '100vh',
}));

const DashboardPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const isLoggedIn = !!session?.user;

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/connexion');
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <>
        <Navigation session={isLoggedIn} />
        <Main>
          <Wrapper>
            <Loading> Redirection...</Loading>
          </Wrapper>
        </Main>
      </>
    );
  }
  if (!session?.user) {
    return (
      <>
        <Navigation session={!isLoggedIn} />
        <Main>
          <Wrapper>
            <Loading> Chargement en cours...</Loading>
          </Wrapper>
        </Main>
      </>
    );
  }
  if (session) {
    return (
      <>
        <Navigation session={isLoggedIn} />
        <Main>
          <Wrapper>
            <h1>Bienvenue {session.user?.name}, sur votre espace personnel</h1>
            <Table></Table>
            <DeleteCard></DeleteCard>
          </Wrapper>
        </Main>
      </>
    );
  }
};

export default DashboardPage;
