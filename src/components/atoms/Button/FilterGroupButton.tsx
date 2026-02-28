'use client';

import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';
import {
  FilterType,
  FilterByImpactType,
} from '@/components/templates/InitiativeListTemplate/InitiativeListTemplate';

const Group = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Btn = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1.5px solid var(--border);
  border-radius: 999px;
  background: transparent;
  font-family: ${theme.typography.fontFamilies.body};
  font-size: 0.875rem;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${theme.colors.backgroundGreen};
    border-color: ${theme.colors.backgroundGreen};
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.backgroundGreen};
    outline-offset: 2px;
  }

  ${({ $active }) =>
    $active &&
    css`
      background: ${theme.colors.backgroundGreen};
      border-color: ${theme.colors.backgroundGreen};
      color: #fff;
    `}
`;

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'Tous', value: 'all' },
  { label: 'Départemental', value: 'departemental' },
];

const FILTERS_IMPACT: { label: string; value: FilterByImpactType }[] = [
  {
    label: 'Climat, Agriculture et Énergie',
    value: 'ClimateAgricultureEnergy',
  },
  { label: 'Urbanisme et Technologie', value: 'UrbanismAndTechnology' },
  { label: 'Solidarité et Communautés', value: 'SolidarityAndCommunities' },
  { label: 'Culture et Transmission', value: 'CultureAndTransmission' },
  { label: 'Éducation et Sensibilisation', value: 'EducationAndAwareness' },
  {
    label: 'Économie Sociale et Solidaire',
    value: 'SocialAndSolidarityEconomy',
  },
];

interface FilterGroupProps {
  current: FilterType;
  currentImpact: FilterByImpactType | 'all';
  onChange: (filter: FilterType) => void;
  onChangeImpact: (filter: FilterByImpactType) => void;
}

export default function FilterGroupButton({
  current,
  currentImpact,
  onChange,
  onChangeImpact,
}: FilterGroupProps) {
  return (
    <Group role="group" aria-label="Filtrer par type">
      {FILTERS.map((filter) => (
        <Btn
          key={filter.value}
          $active={current === filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </Btn>
      ))}
      {FILTERS_IMPACT.map((filter) => (
        <Btn
          key={filter.value}
          $active={currentImpact === filter.value}
          onClick={() => onChangeImpact(filter.value)}
        >
          {filter.label}
        </Btn>
      ))}
    </Group>
  );
}
