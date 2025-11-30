import styled from 'styled-components';
import { theme } from '@/styles/theme';
import Link from 'next/link';
import { mediaQueries } from '@/styles/globalStyles';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.xxl};
  margin-top: ${theme.spacing.xl};

  ${mediaQueries.desktop} {
    gap: ${theme.spacing.xl};
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

interface StyledButtonProps {
  $backgroundColor?: string;
  $backgroundColorHover?: string;
  $colorHover?: string;
  $color?: string;
  $fontFamily?: boolean;
}

export const StyledButton = styled(Link)<StyledButtonProps>`
  font-size: ${theme.typography.fontSizes.sm};
  font-family: ${({ $fontFamily }) =>
    $fontFamily
      ? `${theme.typography.fontFamilies.body}`
      : `${theme.typography.fontFamilies.bigHeading}`};
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ $color }) => ($color ? $color : `${theme.colors.white}`)};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : `${theme.colors.backgroundGreen}`};
  border-radius: 25px;
  border: 2px solid;
  border-color: ${theme.colors.green};
  padding: 16px 32px;
  letter-spacing: 0.125rem;
  transition: color 0.3s ease;
  width: 240px;
  text-align: center;
    
  &:hover {
    border: 2px solid;
    border-color: ${theme.colors.green};
    background-color: ${({ $backgroundColorHover }) =>
      $backgroundColorHover ? $backgroundColorHover : 'transparent'};
    color: ${({ $colorHover }) =>
      $colorHover ? $colorHover : `${theme.colors.green}`};
  },
`;
