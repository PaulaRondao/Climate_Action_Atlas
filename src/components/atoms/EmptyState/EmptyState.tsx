'use client';

import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--muted);
`;

const Icon = styled.div`
  margin-bottom: 1rem;
  opacity: 0.4;
  display: flex;
  justify-content: center;
`;

interface EmptyStateProps {
  value: string;
}

export default function EmptyState({ value }: EmptyStateProps) {
  return (
    <Wrap role="status">
      <Icon>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </Icon>
      <p>
        Aucune région ou département ne correspond à{' '}
        <strong>« {value} »</strong>.
      </p>
    </Wrap>
  );
}
