'use client'

import react, { ReactNode } from 'react';
import { Card, CardContainer, CardTitle } from './cardSection.style';
import { Initiative } from '../../../../../types/enums/initiative';
import { TitleSection } from '../header/header.styles';
import { Container } from '../../ui/global-styles/globalStyle.style';

interface CardSectionProps {
  initiatives: { label: Initiative; description: string }[];
  children: ReactNode,
}

const CardSection: React.FC<CardSectionProps> = ({ initiatives, children }) => (
<Container>
  <CardTitle>
    {children}
  </CardTitle>
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