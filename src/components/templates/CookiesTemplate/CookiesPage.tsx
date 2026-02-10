import React from 'react';
import { Container, Wrapper } from '../LegalNoticesTemplate/legalyPage.styles';

const CookiesPage = (): JSX.Element => (
  <Container>
    <h1>Politique de Cookies</h1>
    <p>
      Le site, Climate Action Atlas est soucieux de vous informer de manière
      claire et transparente sur l’usage des cookies lorsque vous consultez
      notre site.
    </p>
    <p>
      La présente politique d’utilisation des cookies est liée à{' '}
      <a href="politique-de-confidentialite">
        notre politique de protection des données à caractère personnel.
      </a>
    </p>

    <h2>Préambule</h2>
    <p>
      Pour vous permettre de bénéficier des services proposés par notre site,
      tels que sa consultation ou l’optimisation de son utilisation, notre site
      utilise des cookies.
    </p>
    <p>
      L’enregistrement des cookies lors de votre visite sur le site est effectué
      en fonction des choix que vous avez exprimés ou pouvez exprimer à tout
      moment conformément à la présente politique.
    </p>
    <h2>Définition</h2>
    <p>
      Lors de la consultation de notre site, des informations relatives à la
      navigation de votre terminal (ordinateur, tablette, smartphone, etc.) sur
      notre site peuvent être enregistrées dans des fichiers texte appelés «
      cookies », installés sur votre navigateur. Les cookies vont être utilisés
      pour reconnaître votre navigateur pendant la durée de validité du cookie
      concerné. Un cookie est un fichier activé en mode écriture ou lecture.
    </p>
    <p>
      Vous êtes informé que, lors de vos visites sur notre site, des cookies
      peuvent être installés sur votre terminal.
    </p>
    <h2>Finalités</h2>
    <p>Elles sont déterminées en fonction de la nature des cookies.</p>
    <p>
      Des cookies utilisés par notre site, non soumis à votre consentement, sont
      indispensables au bon fonctionnement du site. Il s’agit des cookies
      techniques.
    </p>
    <h2>Cookies techniques</h2>
    <p>
      Ces cookies, non soumis à un consentement préalable, concernent la
      connexion à l'espace privé contributeur.
    </p>
    <h2>Paramétage du logiciel de navigation</h2>
    <p>
      Vous pouvez configurer votre logiciel de navigation de manière à ce que
      des cookies soient enregistrés dans votre terminal ou qu’ils soient
      rejetés, soit systématiquement, soit selon leur émetteur.
    </p>
    <p>
      Vous pouvez également régulièrement supprimer les cookies de votre
      terminal via votre navigateur.
    </p>
    <p>
      Pour la gestion des cookies et de vos choix, la configuration de chaque
      navigateur est différente. Elle est décrite dans le menu d’aide de votre
      navigateur, qui vous permettra de savoir de quelle manière modifier vos
      choix en matière de cookies.
    </p>
    <p>
      Nous attirons toutefois votre attention sur le fait qu’en paramétrant
      votre navigateur pour refuser les cookies, certaines fonctionnalités,
      pages et espaces de notre site, qui nécessitent l’utilisation de cookies,
      ne seront pas accessibles, ce dont nous ne saurions être responsables.
    </p>
    <p>
      Pour en savoir plus sur la manière de paramétrer vos logiciels de
      navigation, nous vous invitons à consulter le site de la Commission
      nationale de l’informatique et des libertés :
      https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.
    </p>
    <h3>Entrée en vigeur</h3>
    <p>
      La présente politique entre en vigueur à la date de sa mise en ligne. Il
      en est de même des modifications.
    </p>
    <Wrapper>
      <span>Mise à jour le 05/05/2026</span>
    </Wrapper>
  </Container>
);

export default CookiesPage;
