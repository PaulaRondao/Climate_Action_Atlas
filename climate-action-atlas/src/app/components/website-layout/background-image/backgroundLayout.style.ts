import styled, { css } from 'styled-components';

interface BackgroundProps {
  backgroundImage?: string,
  backgroundImageSize?: string,
  backgroundPosition?: string,
}

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImage }) => backgroundImage && css`
    background-image: ${backgroundImage};
  `}
  background-position: ${({ backgroundPosition }) => backgroundPosition && css `
  background-position: ${backgroundPosition};
  `};
`