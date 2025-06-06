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
