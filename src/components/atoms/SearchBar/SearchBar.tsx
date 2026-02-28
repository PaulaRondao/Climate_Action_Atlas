'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  flex: 1 1 280px;
`;

const IconWrap = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ink);
  pointer-events: none;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.8rem;
  border: 1.5px solid ${theme.colors.backgroundGreen};
  border-radius: 8px;
  background: ${theme.colors.white};
  font-family: ${theme.typography.fontFamilies.body};
  font-size: 1rem;
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${theme.colors.backgroundGreen};
  }

  &::placeholder {
    color: var(--muted);
  }
`;

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <Wrapper>
      <IconWrap aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </IconWrap>
      <Input
        type="search"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher une région ou un département…"
        aria-label="Rechercher une région ou un département"
      />
    </Wrapper>
  );
}
