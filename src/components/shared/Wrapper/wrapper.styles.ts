import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Content = styled.div`
  width: 100%;

  h3 {
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    line-height: 2.1rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 10px;
  }

  hr {
    border-bottom: 4px solid ${theme.colors.backgroundGreen};
    width: 50px;
    display: block;
    line-height: 1.6em;
    margin: 0 auto;
  }

  p {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3.5rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    p {
      font-size: 3.5rem;
      line-height: 4.5rem;
    }
    margin: auto;
    padding: 0;
  }
`;
