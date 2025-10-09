'use client';

import React from 'react';
import styled from 'styled-components';
import { Container } from '@/styles/components';
import { theme } from '@/styles/theme';
import { Navigation } from '@/components/organisms';
import { PageTitle, Description } from '@/constants/enums';
import dynamic from 'next/dynamic';
// import { SideBarMenu } from '@/components/molecules';

const MapViewContainer = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100vh;
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
  height: 100%;
`;

interface MapViewTemplateProps {
  position: [number, number];
}

const MapView = dynamic(
  () => import('@/components/molecules/MapView/MapView'),
  {
    loading: () => <p>La carte est en cours de chargement</p>,
    ssr: false,
  },
);

export default function MapViewTemplate({ position }: MapViewTemplateProps) {
  return (
    <>
      <Navigation
        pageTitle={PageTitle.UserForm}
        description={Description.CommitmentToUser}
      />
      <MapViewContainer>
        <MainContent>
          <Container>
            {/* <SideBarMenu /> */}
            <MapView position={position} />
          </Container>
        </MainContent>
      </MapViewContainer>
    </>
  );
}
