import styled from 'styled-components';
import { theme } from '@/styles/theme';
import Link from 'next/link';

export const ButtonContainer = styled.button`
  position: relative;
  margin-top: 20px;
  text-align: center;
  color: var(--foreground-dark-blue);
  background-color: transparent;
  border: 2px solid var(--foreground-dark-blue);
  border-radius: 25px;
  padding: 10px 40px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--color-background-green);
    color: var(--color-background-green);
    -webkit-text-stroke: 0.5px var(--color-background-green);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SpanContainer = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  display: inline-block;
`;

export const StyledLink = styled(Link)`
  font-size: ${theme.typography.fontSizes.md};
  font-family: ${theme.typography.fontFamilies.bigHeading};
  text-transform: uppercase;
  color: ${theme.colors.backgroundGreen};
  letter-spacing: 0.125rem;
  transition: color 0.3s ease;
  text-align: left;
  display: block;
  line-height: 1.5;
  
    &:hover {
    background-color: transparent;
    text-decoration: underline;
    text-decoration-color: ${theme.colors.backgroundGreen};
    text-underline-offset: 4px;
    text-decoration-thickness: 4px;
  },
`;

export const StyledButton = styled(Link)`
  font-size: ${theme.typography.fontSizes.sm};
  font-family: ${theme.typography.fontFamilies.bigHeading};
  text-transform: uppercase;
  color: ${theme.colors.white};
  background-color: ${theme.colors.backgroundGreen};
  border-radius: 25px;
  border: 2px solid;
  border-color: transparent;
  padding: 12px 20px;
  letter-spacing: 0.125rem;
  transition: color 0.3s ease;
    
  &:hover {
    border: 2px solid;
    border-color: ${theme.colors.green};
    background-color: transparent;
    color: ${theme.colors.green};
  },
`;
