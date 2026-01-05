'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';
import Image from 'next/image';
import SVGIMG from '../../../../public/logo/logo-full-climate-white.svg';
import ContentInfo from './content-info/ContentInfo';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.backgroundGreen};
  color: ${theme.colors.white};
  width: 100%;
`;

const MainFooterContainer = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.md};

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  }
`;

const MainFooterWrapper = styled.div`
  
  ul {
    list-style: none;
    padding: 0;
    margin-top: ${theme.spacing.lg};
  }

  li {
    margin-bottom: ${theme.spacing.sm};
  }

  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.typography.fontSizes.md};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.fluoGreen};
    }
  }

  ${mediaQueries.desktop} {
    display: flex;
    justify-content: space-between;

    ul {
    flex-wrap: wrap;
    display: grid;
    gap: ${theme.spacing.lg};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

const SecondaryFooter = styled.div`
  background-color: ${theme.colors.backgroundGreen};
  padding: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.white};

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.md} ${theme.spacing.xxl};
  }
`;

const SecondaryFooterContent = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LegalLinks = styled.ul`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: left;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: ${theme.spacing.lg};

  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.typography.fontSizes.sm};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.fluoGreen};
    }
  }

  ${mediaQueries.desktop} {
    align-items: center;
  }
`;

const CopyrightText = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSizes.xs};
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer role="contentinfo">
      <MainFooterContainer>
        <MainFooterWrapper>
          <Image
            src={SVGIMG}
            alt="Climate Action Atlas"
            width={219}
            height={49}
          />
          <ContentWrapper>
            <ContentInfo isMainFooter={true} />
          </ContentWrapper>
        </MainFooterWrapper>
      </MainFooterContainer>
      <SecondaryFooter>
        <SecondaryFooterContent>
          <LegalLinks>
            <li>
              <Link href="/mentions-legales">Mentions Légales</Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/politique-cookies">Politique de cookies</Link>
            </li>
          </LegalLinks>
          <CopyrightText>
            © 2024 Paula Rondao. All rights reserved.
          </CopyrightText>
        </SecondaryFooterContent>
      </SecondaryFooter>
    </FooterContainer>
  );
}
