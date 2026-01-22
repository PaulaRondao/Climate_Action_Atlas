import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${theme.typography.fontSizes.md}
  font-weight: bold;
`;

export const Paragraphe = styled.p`
  font-size: ${theme.typography.fontSizes.smd}
  margin: 0;

  span {
    font-weight: bold;
  }
`;
