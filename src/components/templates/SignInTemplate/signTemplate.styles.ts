import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

interface signTemplateProps {
  $backgroundImage?: string;
}

export const SignContainer = styled.div<signTemplateProps>`
  position: relative;
  min-height: 100vh;
  background-color: ${theme.colors.backgroundBeige};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ $backgroundImage }) =>
      $backgroundImage &&
      css`
        background-image: url(${$backgroundImage});
      `}
    background-size: cover;
    background-position: center;
    opacity: 0.7;
    z-index: 0;
  }
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: ${theme.spacing.xxl} 0;
`;
