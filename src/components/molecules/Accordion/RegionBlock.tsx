'use client';

import { theme } from '@/styles/theme';
import { useState, useId } from 'react';
import styled from 'styled-components';
import { DepartmentGrid } from './DepartmentGrid';
import { EnrichedRegion } from '@/types/Regions';

const Block = styled.div<{ $open: boolean }>`
  border: 1.5px solid var(--border);
  border-radius: 12px;
  background: var(--card);
  overflow: hidden;
  animation: fadeIn 0.2s ease both;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
  background: none;
  border: none;
  font-family: ${theme.typography.fontFamilies.body};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;

  &:hover {
    background: var(--tag-gb);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.backgroundGreen};
    outline-offset: -2px;
    border-radius: 10px;
  }
`;

const TitleWrap = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Emoji = styled.span`
  font-size: 1.4rem;
  flex-shrink: 0;
  line-height: 1;
`;

const RegionName = styled.span`
  font-family: ${theme.typography.fontFamilies.body};
  font-size: 1.25rem;
  color: var(--ink);
  font-weight: bold;
`;

const MetaWrap = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
`;

const CountBadge = styled.span`
  font-size: 0.8rem;
  background: var(--tag-bg);
  color: var(--ink);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-weight: 600;
  white-space: nowrap;
`;

const Chevron = styled.svg<{ $open: boolean }>`
  transition: transform 0.3s ease;
  color: var(--muted);
  flex-shrink: 0;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DeptPanel = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  border-top: 1.5px solid var(--border);
  padding: 1rem 1.5rem 1.5rem;
`;

interface RegionBlockProps {
  data: EnrichedRegion;
  value: string;
  defaultOpen?: boolean;
}

export function RegionBlock({
  data,
  value: value,
  defaultOpen = false,
}: RegionBlockProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const panelId = useId();
  const headerId = useId();

  const handleClick = () => {
    setOpen((current) => !current);
  };

  const deptsToShow =
    value.trim() && !data.isRegionMatch ? data.isDeptMatch : data.depts;

  return (
    <Block $open={open}>
      <Header
        aria-label={`${data.region} avec ${data.count}initiatives`}
        id={headerId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={handleClick}
      >
        <TitleWrap>
          <Emoji aria-hidden="true">{data.emoji}</Emoji>
          <RegionName>&nbsp;{data.region}&nbsp;</RegionName>
        </TitleWrap>

        <MetaWrap>
          <CountBadge aria-label={`${data.count} initiatives`}>
            &nbsp;{data.count}&nbsp;initiatives
          </CountBadge>
          <Chevron
            $open={open}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </Chevron>
        </MetaWrap>
      </Header>

      {open && (
        <DeptPanel
          id={panelId}
          $open={open}
          role="region"
          aria-labelledby={headerId}
        >
          <DepartmentGrid departments={deptsToShow} value={value} />
        </DeptPanel>
      )}
    </Block>
  );
}
