import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.backgroundBeige};
  width: 100%;
`;

export const MainFooterWrapper = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  border-top: 1px solid #918caa;

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

export const FooterSection = styled.div`
  margin-bottom: ${theme.spacing.lg};

  h3 {
    font-size: ${theme.typography.fontSizes.lg};
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.backgroundGreen};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${theme.spacing.sm};
  }

  a {
    color: ${theme.colors.backgroundBeige};
    text-decoration: none;
    font-size: ${theme.typography.fontSizes.md};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.backgroundGreen};
    }
  }
`;

export const SecondaryFooter = styled.div`
  background-color: ${theme.colors.darkBlue};
  padding: ${theme.spacing.md};
  border-top: 1px solid #918caa;

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.md} ${theme.spacing.xxl};
  }
`;

export const SecondaryFooterContent = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    font-size: ${theme.typography.fontSizes.sm};
    color: ${theme.colors.backgroundBeige};
    text-align: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.backgroundBeige};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.backgroundGreen};
    }
  }
`;
