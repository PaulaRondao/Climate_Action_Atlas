'use client';

import React, { ReactNode } from 'react';
import { Card, CardContainer, CardTitle } from './cardSection.styles';
import { Initiative } from '../../../types/enums/initiative';
import { Container } from '../../ui/globalStyle.styles';

interface CardSectionProps {
  initiatives: { label: Initiative; description: string }[];
  children: ReactNode;
}

const CardSection: React.FC<CardSectionProps> = ({ initiatives, children }) => (
  <Container>
    <CardTitle>{children}</CardTitle>
    <CardContainer>
      {initiatives.map((initiative, index) => (
        <Card key={index}>
          <h3>{initiative.label}</h3>
          <p>{initiative.description}</p>
        </Card>
      ))}
    </CardContainer>
  </Container>
);

export default CardSection;