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
    color: ${theme.colors.backgroundGreen};
    font-size: ${theme.typography.fontSizes.lg};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.backgroundBeige};
    font-size: ${theme.typography.fontSizes.md};
    line-height: ${theme.typography.lineHeights.body};
    max-width: 400px;
  }
`;

export const ContactInfo = styled.a`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.backgroundBeige};
    font-size: ${theme.typography.fontSizes.md};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.backgroundGreen};
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  a {
    color: ${theme.colors.backgroundBeige};
    transition: ${theme.transitions.default};

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${theme.colors.backgroundGreen};
    }
  }
`;
