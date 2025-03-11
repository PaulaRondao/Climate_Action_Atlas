import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: ${theme.colors.darkBlue};
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: red; // Debug: pour voir si le wrapper s'affiche
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${theme.colors.white};
  width: 90%;
  max-width: 800px;
`

export const Section = styled.section`
  padding: ${theme.spacing.xxl} ${theme.spacing.md};

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xxl};
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};

  h2 {
    font-size: ${theme.typography.fontSizes.xxl};
    color: ${theme.colors.darkBlue};
    text-transform: uppercase;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.lg};

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  ${mediaQueries.desktop} {
    gap: ${theme.spacing.xl};
  }
`;

export const EngagementSection = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h3 {
    font-size: ${theme.typography.fontSizes.xl};
    color: ${theme.colors.darkBlue};
    margin-bottom: ${theme.spacing.md};
  }

  hr {
    width: 60px;
    margin: ${theme.spacing.md} auto;
    border: none;
    border-top: 2px solid ${theme.colors.darkBlue};
  }

  p {
    margin-bottom: ${theme.spacing.xl};
    line-height: ${theme.typography.lineHeights.body};
  }
`;