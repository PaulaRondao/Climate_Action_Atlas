'use client';

import React from 'react';
import { InitiativesLabel } from '@/types/enums/enums';
import { Card, CardContainer, LogoContainer, LogoWrapper } from './cardWithLogo.styles';
import Image from 'next/image';

interface CardSectionProps {
  initiatives: { label: InitiativesLabel; description: string; logo: string }[];
}

const CardWithLogo: React.FC<CardSectionProps> = ({ initiatives }) => (
  <>
    <CardContainer>
      {initiatives.map((initiative, index) => (
        <Card key={index}>
          <LogoWrapper>
            <LogoContainer>
              <Image src={initiative.logo} alt="" width="34" height="34"></Image>
            </LogoContainer>
            <p>{initiative.label}</p>
          </LogoWrapper>
          <p>{initiative.description}</p>
        </Card>
      ))}
    </CardContainer>
  </>
);

export default CardWithLogo;
