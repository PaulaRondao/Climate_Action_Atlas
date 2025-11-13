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

  h1 {
    margin-bottom: ${theme.spacing.xl};
  }

  p {
    font-weight: bold;
  }
`;

interface SectionProps {
  $backgroundColorGreen?: boolean;
  $colorBeige?: boolean;
}

export const Section = styled.section<SectionProps>`
  padding: ${theme.spacing.xxl} ${theme.spacing.md};
  background-color: ${({ $backgroundColorGreen }) =>
    $backgroundColorGreen ? '#072A32' : ''};
  color: ${({ $colorBeige }) => ($colorBeige ? '#F0EDEB' : '#072A32')};

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xxl};
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

interface TitleSectionProps {
  $fontSize?: string;
  $fontSizeText?: string;
  $fontFamily?: string;
  $lineHeight?: string;
  $lineHeightText?: string;
  $gap?: string;
  $textAlign?: string;
  $textAlignHeading?: string;
}

export const TitleSection = styled.div<TitleSectionProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${({ $gap }) => ($gap ? $gap : '50px')};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : 'center')};
  margin-bottom: ${theme.spacing.xl};

  h2 {
    font-size: ${({ $fontSize }) =>
      $fontSize ? $fontSize : `${theme.typography.fontSizes.xxl}`};
    line-height: ${({ $lineHeight }) =>
      $lineHeight ? $lineHeight : `${theme.typography.lineHeights.heading}`};
    text-align: center;
  }
  p {
    font-size: ${({ $fontSizeText }) =>
      $fontSizeText ? $fontSizeText : `${theme.typography.fontSizes.md}`};
    font-family: ${({ $fontFamily }) =>
      $fontFamily ? $fontFamily : `${theme.typography.fontFamilies.heading}`};
    line-height: ${({ $lineHeightText }) =>
      $lineHeightText
        ? $lineHeightText
        : `${theme.typography.lineHeights.body}`};
  }

  ${mediaQueries.desktop} {
    h2 {
      text-align: ${({ $textAlignHeading }) =>
        $textAlignHeading ? $textAlignHeading : 'center'};
    }
  }
`;

export const EngagementSection = styled.div`
  max-width: 600px;
  margin: 0 auto;

  hr {
    width: 60px;
    margin: ${theme.spacing.md} auto;
    border: none;
    border-top: 2px solid ${theme.colors.backgroundGreen};
  }
`;
