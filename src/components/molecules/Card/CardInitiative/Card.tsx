'use client';

import { InitiativeTypeToLabel } from '@/constants';
import { formattedDate } from '@/helpers/formattedDate';
import { InitiativeWithRelations } from '@/types/initiatives';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--card);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 360px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--ink);
  margin: 0;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background: var(--tag-bg);
  color: var(--ink);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  display: inline-block;
`;

export const Label = styled.span`
  font-size: 0.75rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Value = styled.p`
  font-size: 0.9rem;
  color: var(--ink);
  margin: 0;
`;

export const Footer = styled.footer`
  font-size: 0.75rem;
  color: var(--muted);
  border-top: 1px solid var(--border);
  padding-top: 0.75rem;
`;

interface CardProps {
  value: string;
  onChange: (v: string) => void;
  initiatives: InitiativeWithRelations[];
}

export default function Card({ value, onChange, initiatives }: CardProps) {
  return initiatives.map((initiative, index) => {
    return (
      <Wrapper key={index}>
        <header role="banner">
          <Title>{initiative.name}</Title>
        </header>
        <main role="main">
          <Section>
            <Label>Description</Label>
            <Value>{initiative.description}</Value>
          </Section>
          <Section>
            <Label>Adresse</Label>
            <Value>
              {initiative.initiativeLocation?.postcode}{' '}
              {initiative.initiativeLocation?.street},{' '}
              {initiative.initiativeLocation?.city}
            </Value>
          </Section>

          <Section>
            <Label>Type d'impact</Label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {initiative.initiativeType.map((type) => (
                <Tag key={type}>{InitiativeTypeToLabel[type]}</Tag>
              ))}
            </div>
          </Section>

          {initiative.narrative && (
            <Section>
              <Label>Narrative</Label>
              <Value>{initiative.narrative}</Value>
            </Section>
          )}
        </main>
        <Footer role="contentinfo">
          {initiative.contributor && (
            <span>Ajouté par {initiative.contributor?.name} · </span>
          )}
          <span>Mise à jour le {formattedDate(initiative)}</span>
        </Footer>
      </Wrapper>
    );
  });
}
