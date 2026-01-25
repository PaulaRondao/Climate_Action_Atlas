'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Footer, Header } from '@/components/organisms';
import { PageTitle, Description } from '@/types/enums/enums';
import InitiativeCreationForm from '@/components/molecules/Forms/initiative-form/InitiativeCreationForm';
import { Session } from 'next-auth';

const InitiativeCreationContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.backgroundBeige};
`;

const MainContent = styled.main`
  position: relative;
`;

interface InitiativeCreationTemplateProps {
  session: Session | null;
}

export default function InitiativeCreationTemplate({ session }: InitiativeCreationTemplateProps) {
  return (
    <>
      <MainContent>
        <Header
          pageTitle={PageTitle.InitiativeForm}
          description={Description.InitiativeToAdd}
        ></Header>
        <InitiativeCreationContainer>
          <InitiativeCreationForm session={session} />
        </InitiativeCreationContainer>
      </MainContent>
      <Footer />
    </>
  );
}
