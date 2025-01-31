import styled, { css } from 'styled-components';

interface BackgroundContainerProps {
  backgroundImage?: string,
  backgroundImageSize?: string,
  backgroundPosition?: string,
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  position: relative;
  height: 500px;
`;

export const BackgroundImage = styled.img<BackgroundContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`;