import styled, { css } from 'styled-components';
import {
  BREAK_POINT,
  DEVICE_QUERY,
} from '../../../../../types/enums/viewports';

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
  padding: 16px;
  margin: auto;

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

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    padding: 32px 64px;
    margin-bottom: 64px;
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

interface CardTitleProps {
  center?: boolean;
  centerOnMobile?: boolean;
  fontSize?: string;
  padding?: string;
}
export const CardTitle = styled.h2<CardTitleProps>`
  font-family: var(--font-extra-bold);
  font-size: var(--text-xxl);
  color: var(--color-black);
  text-align: start;
  ${({ centerOnMobile }) =>
    centerOnMobile &&
    css`
      text-align: center;
      margin: auto;
    `}
  ${({ center }) =>
    center &&
    css`
      @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
    `}
  ${({ padding }) =>
    padding &&
    css`
      @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
        padding: ${padding};
      }
    `}
`;

export const CardSubTitle = styled(CardTitle).attrs({ as: 'h3' })`
  font-size: var(--text-lg);
  text-align: start;
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
      @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
        font-size: ${fontSize};
      }
    `}
`;

interface BackgroundProps {
  background?: string;
  arrowBottom?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
}
export const Background = styled.div<BackgroundProps>`
  position: relative;
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
  ${({ backgroundSize }) =>
    backgroundSize &&
    css`
      background-size: ${backgroundSize};
    `}

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    background-repeat: no-repeat;
    ${({ backgroundImage }) =>
      backgroundImage &&
      css`
        background-image: ${backgroundImage};
      `}
    ${({ backgroundPosition }) =>
      backgroundPosition &&
      css`
        background-position: ${backgroundPosition};
      `}
  }
`;

interface GoBackButtonProps {
  fontSize?: string;
}
export const GoBackButton = styled.button<GoBackButtonProps>`
  font-family: var(--font-extra-bold);
  background: transparent;
  color: var(--color-primary);
  padding: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 16px;
  align-items: center;
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}

  &:hover, &:active {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
`;

interface ButtonContainerProps {
  fluid?: boolean;
  center?: boolean;
  margin?: string;
  display?: string;
}
export const ButtonWrapper = styled.div<ButtonContainerProps>`
  display: flex;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  a, button {
    flex: 1;
    span {
      display: flex;
      gap: 8px;
      justify-content: center;
    }
  }

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    margin: auto;
    ${({ display }) =>
      display &&
      css`
        display: ${display};
      `}
    ${({ fluid }) =>
      fluid &&
      css`
        display: flex;
      `}
    ${({ center }) =>
      center &&
      css`
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      `}
  }
`;

interface FlexContainerProps {
  flexDirection?: 'row' | 'column';
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  textAlign?: string;
}
export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
`;
