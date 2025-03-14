'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { mediaQueries } from '@/styles/globalStyles';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.backgroundBeige};
  width: 100%;
`;

const MainFooterWrapper = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  border-top: 1px solid #918caa;

  ${mediaQueries.desktop} {
    padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  }
`;

const FooterSection = styled.div`
  margin-bottom: ${theme.spacing.lg};

  h3 {
    font-size: ${theme.typography.fontSizes.lg};
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.backgroundGreen};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${theme.spacing.sm};
  }

  a {
    color: ${theme.colors.backgroundBeige};
    text-decoration: none;
    font-size: ${theme.typography.fontSizes.md};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.backgroundGreen};
    }
  }
`;

const SecondaryFooter = styled.div`
  background-color: ${theme.colors.darkBlue};
  padding: ${theme.spacing.md};
  border-top: 1px solid #918caa;

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
  }

  p {
    font-size: ${theme.typography.fontSizes.sm};
    color: ${theme.colors.backgroundBeige};
    text-align: center;
  }
`;

const LegalLinks = styled.ul`
  display: flex;
  gap: ${theme.spacing.xl};
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin: 0;
  }

  a {
    color: ${theme.colors.backgroundBeige};
    text-decoration: none;
    font-size: ${theme.typography.fontSizes.sm};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.backgroundGreen};
    }
  }

  ${mediaQueries.desktop} {
    justify-content: flex-start;
  }
`;

export default function Footer() {
  return (
    <FooterContainer role="contentinfo">
      <MainFooterWrapper>
        <FooterSection>
          <h3>À propos</h3>
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
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
