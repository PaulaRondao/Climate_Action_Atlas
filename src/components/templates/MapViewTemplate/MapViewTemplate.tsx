'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Navigation } from '@/components/organisms';
import { PageTitle, Description, InitiativesLabel } from '@/types/enums/enums';
import dynamic from 'next/dynamic';
import SidebarControl from '@/components/molecules/Sidebar/SidebarControl';

const MapView = dynamic(
  () => import('@/components/molecules/MapView/MapView'),
  {
    loading: () => <p>La carte est en cours de chargement...</p>,
    ssr: false,
  },
);

interface MapViewTemplateProps {
  position: [number, number];
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.backgroundBeige};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapWrapper = styled.div`
  flex: 1;
  height: 100vh;
  z-index: 1;

  @media (max-width: 768px) {
    height: calc(100vh - 60px);
  }
`;

export default function MapViewTemplate({ position }: MapViewTemplateProps) {
  const [selectedType, setSelectedType] = useState<InitiativesLabel | null>(
    null,
  );

  return (
    <PageWrapper>
      <Navigation
        pageTitle={PageTitle.UserForm}
        description={Description.CommitmentToUser}
      />

      <ContentWrapper>
        <SidebarControl onChange={setSelectedType} />
        <MapWrapper>
          <MapView position={position} filteredInitiativeType={selectedType} />
        </MapWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}
