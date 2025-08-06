'use client';

import React from 'react';
import styled from 'styled-components';
import SignUpForm from '@/components/molecules/Forms/SignUpForm';
import { Container } from '@/styles/components';
import { theme } from '@/styles/theme';
import { Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/constants/enums';
import MapView from '@/components/molecules/MapView/MapView';

const MapViewContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${theme.colors.backgroundBeige};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    z-index: 0;
  }
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: ${theme.spacing.xl} 0;
`;

export default function MapViewTemplate() {
  return (
    <>
      <Navigation
        pageTitle={PageTitle.UserForm}
        description={Description.CommitmentToUser}
      />
      <MapViewContainer>
        <MainContent>
          <Container>
            <MapView />
          </Container>
        </MainContent>
      </MapViewContainer>
    </>
  );
}
