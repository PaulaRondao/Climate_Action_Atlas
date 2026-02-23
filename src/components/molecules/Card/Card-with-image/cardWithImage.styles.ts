import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-green);
  max-width: 250px;
  width: 100%;
`;

interface CardWrapperProps {
  $marginTop?: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  ${({ $marginTop: $marginTop }) =>
    $marginTop &&
    css`
      margin-top: 60px;
    `};
`;

export const CardContent = styled.div`
  gap: 8px;
  border-radius: ${theme.borderRadius.small};
  width: 200px;

  h3 {
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  hr {
    width: 40px;
    padding: 4px;
    border: none;
    border-top: 2px solid ${theme.colors.fluoGreen};
  }
`;

interface ParagrapheProps {
  $fontWeightBold?: boolean;
}

export const Paragraphe = styled.p<ParagrapheProps>`
  text-align: center;
  font-weight: ${({ $fontWeightBold }) =>
    $fontWeightBold ? 'bold' : 'normal'};
  margin: 30px auto;
`;
