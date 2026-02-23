'use client';

import Loading from '@/app/loading';
import { CardWrapper } from '@/components/molecules/Card/Card-with-image/cardWithImage.styles';
import AlertDialog from '@/components/molecules/Modal/AlertDialog';
import Table from '@/components/molecules/Table/Table';
import { Navigation } from '@/components/organisms';
import { Wrapper } from '@/components/shared';
import { Description } from '@/constants';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  gap: 10px;
  padding: 8px;
  color: #c4170d;
  font-weight: bold;
  border: 2px solid #c4170d;
  border-radius: 40px;

  &:hover {
    cursor: pointer;
    background-color: #c4170d2e;
    box-shadow: 0 0 0 3px rgba(196, 23, 13, 0.2);
  }
`;

const Main = styled('main')(() => ({
  minHeight: '100vh',
}));

const DashboardPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

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
            <CardWrapper $marginTop>
              <Button ref={triggerRef} onClick={() => setOpen(true)}>
                Supprimer mon compte
              </Button>
              <AlertDialog
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={() => console.log('confirmed')}
                title="Supprimer mon compte"
                description={Description.AccountDelete}
                confirmLabel="Supprimer définitivement mon compte"
                cancelLabel="Annuler"
                triggerRef={triggerRef}
              />
            </CardWrapper>
          </Wrapper>
        </Main>
      </>
    );
  }
};

export default DashboardPage;
