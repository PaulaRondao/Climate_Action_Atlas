'use client';

import { theme } from '@/styles/theme';
import { Department } from '@/types/Regions';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.6rem;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const DeptBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(-var(--bg);
  font-size: 0.9rem;
  transition: all .2s;
  gap: 0.5rem;

  &:hover {
    border-color: ${theme.colors.backgroundGreen};
    color: ${theme.colors.backgroundGreen};
    background: #fff;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.backgroundGreen};
    outline-offset: 2px;
  }
`;

const DeptNum = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ink);
  background: var(--tag-bg);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  flex-shrink: 0;
`;

const DeptName = styled.span`
  flex: 1;
`;

const DeptBadge = styled.span`
  font-size: 0.72rem;
  background: var(--tag-bg);
  color: #3a7d44;
  padding: 0.15rem 0.4rem;
  border-radius: 999px;
  font-weight: 600;
  white-space: nowrap;
`;

interface DepartmentGridProps {
  departments: Department[];
  value: string;
}

export function DepartmentGrid({ departments }: DepartmentGridProps) {
  return (
    <Grid>
      {departments.map((dept) => (
        <DeptBtn key={dept.num}>
          <DeptNum aria-hidden="true">{dept.num}</DeptNum>
          <DeptName>{dept.name}</DeptName>
          {dept.count > 0 && (
            <DeptBadge aria-hidden="true">{dept.count}</DeptBadge>
          )}
        </DeptBtn>
      ))}
    </Grid>
  );
}
