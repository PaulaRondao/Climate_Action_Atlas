import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const PageWrap = styled.div`
  min-height: 100vh;
`;

export const Wrapper = styled.header`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 600px) {
    padding: 2rem 1rem 1.5rem;
  }
`;

export const Overline = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${theme.colors.backgroundGreen};
  font-weight: 600;
`;

export const Title = styled.h1`
  font-family: ${theme.typography.fontFamilies.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  color: ${theme.colors.backgroundGreen};
`;

export const Subtitle = styled.p`
  color: var(--ink);
  font-size: 1.05rem;
  max-width: 55ch;
  font-weight: 300;
`;

export const Controls = styled.div`
  max-width: 1100px;
  margin: 0 auto 2rem;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Legend = styled.div`
  max-width: 1100px;
  margin: 0 auto 1.5rem;
  padding: 0 2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: var(--ink);
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const LegendItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ResultInfo = styled.div`
  max-width: 1100px;
  margin: 0 auto 0.75rem;
  padding: 0 2rem;
  font-size: 0.875rem;
  color: var(--ink);
  min-height: 1.4rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 600px) {
    padding: 0 1rem 3rem;
  }
`;
