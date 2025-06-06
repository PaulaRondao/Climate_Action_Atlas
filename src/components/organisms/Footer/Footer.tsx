'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';
import Image from 'next/image';
import SVGIMG from '../../../../public/logo/logo-climate-green.svg';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.backgroundGreen};
  color: ${theme.colors.white};
  width: 100%;
`;

const MainFooterWrapper = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.white};

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  }
`;

const FooterSection = styled.div`
  margin-bottom: ${theme.spacing.lg};

  h3 {
    font-size: ${theme.typography.fontSizes.lg};
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.white};
  }

  ul {
    list-style: none;
    padding: 0;
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

  p {
    font-size: ${theme.typography.fontSizes.sm};
    color: ${theme.colors.white};
    text-align: center;
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

export default function Footer() {
  return (
    <FooterContainer role="contentinfo">
      <MainFooterWrapper>
        <FooterSection>
          <div>
            <Image
              src={SVGIMG}
              alt="Climate Action Atlas"
              width={38}
              height={38}
            />
            <h3>Climate Atlas Action</h3>
          </div>
          <ul>
            <li>
              <Link href="/about">À propos</Link>
            </li>
            <li>
              <Link href="/sitemap">Plan du site</Link>
            </li>
            <li>
              <Link href="/accessibilité">Accessibilité</Link>
            </li>
          </ul>
        </FooterSection>
      </MainFooterWrapper>
      <SecondaryFooter>
        <SecondaryFooterContent>
          <LegalLinks>
            <li>
              <Link href="/mentions-legales">Mentions Légales</Link>
            </li>
            <li>
              <Link href="/politique-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/politique-cookies">Politique de cookies</Link>
            </li>
          </LegalLinks>
          <p>© 2024 Paula Rondao. All rights reserved.</p>
        </SecondaryFooterContent>
      </SecondaryFooter>
    </FooterContainer>
  );
}
