'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';
import { Initiative } from '@/constants/enums';
import { Container } from '@/styles/components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.sm};
  background-color: var(--color-background-beige);
  max-width: 800px;
  margin: ${theme.spacing.md} auto;
  gap: ${theme.spacing.xl};

  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
  }
`;

const Card = styled.div`
  grid-row: auto / span 2;
  display: grid;
  grid-template-rows: subgrid;
  gap: ${theme.spacing.md};
  border: 1px solid var(--foreground-grey-black);
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};

  h3 {
    font-weight: bold;
  }
`;

const CardTitle = styled.div`
  width: 100%;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  padding: ${theme.spacing.xl} 0;
  text-align: center;
`;

interface CardSectionProps {
  initiatives: { label: Initiative; description: string }[];
  children: React.ReactNode;
}

const CardSection: React.FC<CardSectionProps> = ({ initiatives, children }) => (
  <>
    <CardTitle>{children}</CardTitle>
    <CardContainer>
      {initiatives.map((initiative, index) => (
        <Card key={index}>
          <h3>{initiative.label}</h3>
          <p>{initiative.description}</p>
        </Card>
      ))}
    </CardContainer>
  </>
);

export default CardSection;
