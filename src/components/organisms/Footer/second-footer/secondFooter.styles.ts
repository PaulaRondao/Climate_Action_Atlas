import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

export const SecondFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md} 0;

  p {
  font-size: ${theme.typography.fontSizes.xs}
  }

  ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CopyrightText = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSizes.sm};
  text-align: center;

  ${mediaQueries.desktop} {
    text-align: left;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.white};
    font-size: ${theme.typography.fontSizes.sm};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.fluoGreen};
    }
  }

  ${mediaQueries.desktop} {
    justify-content: flex-end;
  }
`;
