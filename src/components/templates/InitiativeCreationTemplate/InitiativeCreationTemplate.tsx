'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Header, Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/types/enums/enums';
import InitiativeCreationForm from '@/components/molecules/Forms/initiative-form/InitiativeCreationForm';
import { useSession } from '@/lib/auth-client';

const InitiativeCreationContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.backgroundBeige};
`;

const MainContent = styled.main`
  position: relative;
`;

export default function InitiativeCreationTemplate() {
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
      <Navigation session={isLoggedIn} />
      <MainContent>
        <Header
          pageTitle={PageTitle.InitiativeForm}
          description={Description.InitiativeToAdd}
        ></Header>
        <InitiativeCreationContainer>
          <InitiativeCreationForm />
        </InitiativeCreationContainer>
      </MainContent>
    </>
  );
}
