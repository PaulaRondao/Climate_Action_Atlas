'use client';

import React from 'react';
import styled from 'styled-components';
import { Container } from '@/styles/components';
import { theme } from '@/styles/theme';
import { Header } from '@/components/organisms';
import { PageTitle, Description } from '@/types/enums/enums';
import InitiativeCreationForm from '@/components/molecules/Forms/initiative-form/InitiativeCreationForm';

const InitiativeCreationContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${theme.colors.backgroundGreen};
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: ${theme.spacing.xl} 0;
`;

export default function InitiativeCreationTemplate() {
  return (
    <>
      <Header
        pageTitle={PageTitle.AssociationForm}
        description={Description.InitiativeToAssociation}
      ></Header>
      <InitiativeCreationContainer>
        <MainContent>
          <Container>
            <InitiativeCreationForm />
          </Container>
        </MainContent>
      </InitiativeCreationContainer>
    </>
  );
}
