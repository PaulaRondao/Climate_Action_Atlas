'use client';

import React from 'react';
import styled from 'styled-components';
import { Container } from '@/styles/components';
import { theme } from '@/styles/theme';
import { Header, Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/types/enums/enums';
import InitiativeCreationForm from '@/components/molecules/Forms/initiative-form/InitiativeCreationForm';

const InitiativeCreationContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${theme.colors.backgroundGreen};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/forest-sky-view.png');
    background-size: cover;
    background-position: center;
    opacity: 0.7;
    z-index: 0;
  }
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: ${theme.spacing.xl} 0;
`;

export default function InitiativeCreationTemplate() {
  return (
    <>
      <Navigation 
        connected
      />
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
