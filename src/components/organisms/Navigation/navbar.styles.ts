import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';

export enum NAV_BAR_HEIGHT {
  REGULAR = '70px',
  HIGH = '130px',
}

interface WrapperProps {
  $connected: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  box-shadow: 0px 2px 4px rgba(34, 35, 35, 0.1);

  ${({ $connected }) =>
    !$connected &&
    css`
      top: 0;
      z-index: 7;
    `}
`;

export interface SidePanelProps {
  $isOpen: boolean;
}

export const Container = styled.div<SidePanelProps>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background-color: var(--color-background-beige);
  height: 100vh;
  width: 100%;
  top: 46px;
  left: 0;
  padding: 0px 16px;
  z-index: 1000;
  overflow-y: auto;
  margin-top: 16px;

  li {
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding-top: 24px;
  justify-content: left;
  flex-direction: column;
  gap: 24px;

  ul {
    width: 100%;
  }
`;

export const NavBarContainer = styled.nav`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  height: ${NAV_BAR_HEIGHT.REGULAR};
  background: var(--color-white);
  position: relative;
  z-index: 10;

  svg {
    fill: var(--color-white);
    width: 24px;
    height: 24px;
  }
`;

export const NavBarList = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: row;
  padding: 0 12px;
  }
`;

export const BurgerContainer = styled.div`
  display: flex;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavBarListItem = styled.div`
  font-size: var(--text-smd);
`;

export interface NavBarLinkItemProps {
  $active: boolean;
  $withPadding: boolean;
}

export const NavBarLinkItem = styled.a<NavBarLinkItemProps>`
  display: block;
  cursor: pointer;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  font-size: var(--text-smd);

  // &:focus,
  // &:hover {
  //   background: var(--color-very-light-grey);
  // }

  ${(props) =>
    props.$active &&
    css`
      font-weight: bold;
    `}

  ${(props: NavBarLinkItemProps) =>
    props.$withPadding &&
    css`
      width: 100%;
      padding: 16px;
    `}
`;
