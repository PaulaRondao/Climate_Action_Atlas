import styled, { css } from 'styled-components';
import { theme } from './theme';
import { mediaQueries } from './globalStyles';

interface ContainerProps {
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  displayBackgroundImageOnDesktop?: boolean;
  padding?: string;
  maxWidth?: string;
  gap?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.md};
  max-width: 546px;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;

  ${({ backgroundPosition }) =>
    backgroundPosition &&
    css`
      background-position: ${backgroundPosition};
    `}

  ${({ backgroundSize }) =>
    backgroundSize &&
    css`
      background-size: ${backgroundSize};
    `}

  ${({ displayBackgroundImageOnDesktop, backgroundImage }) =>
    displayBackgroundImageOnDesktop &&
    css`
      background-image: ${backgroundImage};
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};

    ${({ padding }) =>
      padding &&
      css`
        padding: ${padding};
      `}

    ${({ gap }) =>
      gap &&
      css`
        gap: ${gap};
      `}
    
    ${({ backgroundImage }) =>
      backgroundImage &&
      css`
        background-image: ${backgroundImage};
      `}
  }
`;

interface FlexContainerProps {
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  gap?: string;
  wrap?: boolean;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
  gap: ${({ gap = theme.spacing.md }) => gap};
  flex-wrap: ${({ wrap = false }) => (wrap ? 'wrap' : 'nowrap')};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.backgroundGreen};
  border-radius: ${theme.borderRadius.small};
  background-color: ${theme.colors.white};

  h3 {
    font-weight: bold;
  }
`;

export const CardTitle = styled.h2`
  width: 100%;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  padding: ${theme.spacing.xl} 0;
  text-align: center;
`;

export const BackgroundLayout = styled.section<{ height?: string }>`
  position: relative;
  width: 100%;
  height: ${({ height = '500px' }) => height};
  background-color: ${theme.colors.backgroundGreen};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;
