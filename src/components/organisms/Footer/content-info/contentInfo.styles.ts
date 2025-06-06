import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

export const ContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.xl} 0;

  ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const InfoSection = styled.div`
  h3 {
    color: ${theme.colors.fluoGreen};
    font-size: ${theme.typography.fontSizes.lg};
    margin-bottom: ${theme.spacing.md};
  }
`;

export const ContactInfo = styled.a`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.white};
    font-size: ${theme.typography.fontSizes.md};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.fluoGreen};
    }
  }
`;
