import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-green);
  max-width: 250px;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const CardContent = styled.div`
  gap: 8px;
  border-radius: ${theme.borderRadius.small};
  width: 200px;

  h3 {
    font-weight: bold;
    line-height: 1.5rem;
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
