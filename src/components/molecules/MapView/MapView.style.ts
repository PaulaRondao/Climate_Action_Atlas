import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${theme.typography.fontSizes.md}
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--ink);
  margin: 0;
`;

export const Paragraphe = styled.p`
  font-size: ${theme.typography.fontSizes.smd}
  margin: 0;

  span {
    font-weight: bold;
  }
`;
