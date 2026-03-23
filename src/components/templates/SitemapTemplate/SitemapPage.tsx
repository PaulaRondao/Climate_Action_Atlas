import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  padding-top: 64px;

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  li {
    padding: 8px 0;
  }

  a {
    text-decoration-line: underline;
    font-size: 1.5rem;

    &:hover {
      font-weight: bold;
    }
  }
`;

const SitemapPage = (): JSX.Element => (
  <Container>
    <h1>Plan du site</h1>
    {''}
    <ul>
      <li>
        <Link href="/">Accueil</Link>
      </li>
      <li>
        <Link href="/liste">Liste</Link>
      </li>
      <li>
        <Link href="/carte">Carte</Link>
      </li>
      <li>
        <Link href="/inscription">Inscription</Link>
      </li>
      <li>
        <Link href="/connexion">Connexion</Link>
      </li>
      <li>
        <Link href="/a-propos">À propos</Link>
      </li>
      <li>
        <Link href="/mentions-legales">Mentions légales</Link>
      </li>
      <li>
        <Link href="/politique-de-confidentialite">
          Politique de confidentialité
        </Link>
      </li>
      <li>
        <Link href="/politique-de-cookie">Politique de cookies</Link>
      </li>
    </ul>
  </Container>
);

export default SitemapPage;
