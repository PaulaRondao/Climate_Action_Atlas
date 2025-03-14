import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

export const MainFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};

  ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  img {
    max-width: 200px;
    height: auto;
  }

  p {
    max-width: 300px;
    color: ${theme.colors.backgroundBeige};
    font-size: ${theme.typography.fontSizes.md};
    line-height: ${theme.typography.lineHeights.body};
  }
`;

export const NavigationContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.xl};
  width: 100%;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NavigationSection = styled.div`
  h4 {
    color: ${theme.colors.backgroundGreen};
    font-size: ${theme.typography.fontSizes.lg};
    margin-bottom: ${theme.spacing.md};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }

  a {
    color: ${theme.colors.backgroundBeige};
    font-size: ${theme.typography.fontSizes.md};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.backgroundGreen};
    }
  }
`;
