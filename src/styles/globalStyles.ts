import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import localFont from 'next/font/local';

export const myFont = localFont({
  src: '../../public/font/ClimateCrisis.woff2',
  variable: '--font-myLocalFont',
});

export const mediaQueries = {
  mobile: `@media (min-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  wide: `@media (min-width: ${theme.breakpoints.wide})`,
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1100px;

    --foreground-white: #ffffff;
    --foreground-fluo-green: #6ee7b7;
    --foreground-dark-blue: #010020;
    --foreground-green: #072A32;
    --error-red: #DC143C;

    --color-background-beige: #F0EDEB;
    --color-background-green: #072A32;

    --text-xs: 0.6875rem;
    --text-sm: 0.8125rem;
    --text-smd: 0.875rem;
    --text-md: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-xxl: 1.625rem;
    --text-xxxl: 2.375rem;
    --text-xxxxl: 3.375rem;
    --text-xxxxxl: 5.625rem;

    --font-myLocalFont: ${myFont.style.fontFamily};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    color: ${theme.colors.backgroundGreen};
    background: ${theme.colors.backgroundBeige};
    font-family: ${theme.typography.fontFamilies.body};
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #__next, #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  footer {
    flex-shrink: 0;
  }

  h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamilies.heading};
    font-weight: 400;
    letter-spacing: ${theme.typography.letterSpacing.heading};
    line-height: ${theme.typography.lineHeights.heading};
  }

  h1 {
    font-size: ${theme.typography.fontSizes.xxl};
    font-family: ${theme.typography.fontFamilies.heading};
    font-weight: 400;
    letter-spacing: ${theme.typography.letterSpacing.heading};
    line-height: ${theme.typography.lineHeights.heading};

    ${mediaQueries.desktop} {
        font-size: ${theme.typography.fontSizes.xxxl};
      }
  }

  h2 {
    font-size: ${theme.typography.fontSizes.xxl};
  }

  h3 {
    font-size: ${theme.typography.fontSizes.xl};
  }

  p {
    line-height: ${theme.typography.lineHeights.body};
    font-weight: 500;
    font-size: ${theme.typography.fontSizes.md};
    font-family: ${theme.typography.fontFamilies.body};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  input, select, textarea {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
  }
`;

export const commonStyles = {
  container: `
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  `,
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexColumn: `
    display: flex;
    flex-direction: column;
  `,
  gridCenter: `
    display: grid;
    place-items: center;
  `,
};
