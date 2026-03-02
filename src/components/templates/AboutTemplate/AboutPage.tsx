import React from 'react';
import { Container, Wrapper } from '../LegalNoticesTemplate/legalyPage.styles';

const AboutPage = (): JSX.Element => (
  <Container>
    <h1>À propos de Climate Action Atlas</h1>
    <h2>Pourquoi cette plateforme</h2>
    <p>
      Climate Action Atlas est une plateforme collaborative et interactive
      pensée pour cartographier les initiatives locales qui agissent pour une
      transformation écologique, sociale, artisanale, éducative ou culturelle.
      Elle s’adresse à toutes celles et ceux qui souhaitent apprendre,
      s’inspirer et s’engager.
    </p>
    <p>
      Bien plus qu’une carte, c’est un outil vivant de mise en lien : chaque
      initiative peut être racontée sous forme de récit, pour valoriser
      l’action. Ces récits, portés par des citoyen·nes, des collectifs, des
      associations ou des communautés, sont ancrés dans des lieux, des pratiques
      et des intentions concrètes.
    </p>

    <p>
      La plateforme permet d’explorer des initiatives partout dans le monde, en
      naviguant par type d’impact. Elle invite à découvrir des graines d’impact,
      petites ou grandes, et à lire une description et/ou des récits
      authentiques qui témoignent de la diversité des réponses locales face aux
      enjeux contemporains.
    </p>
    <p>
      Chaque utilisateur·rice peut également contribuer à cette cartographie en
      ajoutant une initiative via un formulaire simple et accessible qui
      respecte le souhait d’être anonymisé s’ils/elles le souhaitent. Les
      initiatives enregistrées enrichissent une base de données commune, qui
      alimente l’engagement collectif.
    </p>
    <p>
      Climate Action Atlas ambitionne ainsi de reconnecter les humain·es entre
      eux et au vivant, en valorisant ce qui existe déjà sur le terrain. Elle
      renforce la visibilité, l’entraide et l’espoir, tout en permettant à
      chacun·e de trouver des pistes d’action concrètes, proches de chez soi ou
      à l’autre bout du monde.
    </p>
    <Wrapper>
      <span>Mise à jour le 05/05/2026</span>
    </Wrapper>
  </Container>
);

export default AboutPage;
