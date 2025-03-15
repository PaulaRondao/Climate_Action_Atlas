'use client';

import React from 'react';
import styled from 'styled-components';
import { Container } from '@/styles/components';
import { theme } from '@/styles/theme';
import { Header, Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/constants/enums';
import InitiativeCreationForm from '@/components/molecules/Forms/initiative-form/InitiativeForm';

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: ${theme.spacing.xl} 0;
`;

export default function InitiativeCreationTemplate() {
  return (
    <>
      <Navigation />
      <Header
        pageTitle={PageTitle.AssociationForm}
        description={Description.InitiativeToAssociation}
      ></Header>
      <Container>
        <MainContent>
          <Container>
            <InitiativeCreationForm />
          </Container>
        </MainContent>
      </Container>
    </>
  );
}
