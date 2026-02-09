import React from 'react';
import { Container, Wrapper } from './legalyPage.styles';

const LegalNoticesPage = (): JSX.Element => (
  <Container>
    <h1>Mentions légales</h1>
    <p>
      Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
      la confiance en l'économie numérique, il est précisé aux utilisateurs du
      site Climate Action Atlas l'identité des différents intervenants dans le
      cadre de sa réalisation et de son suivi.
    </p>

    <h2>Édition du site</h2>
    <p>
      Le présent site,{' '}
      <a href="www.climate-action-atlas.fr">www.climate-action-atlas.fr</a>, est
      édité par Maud Paula Rondao, résidant 47 chemin des alouettes 17610
      Chaniers.
    </p>
    <h2>Hébergement</h2>
    <p>
      Le site{' '}
      <a href="www.climate-action-atlas.fr">www.climate-action-atlas.fr</a> est
      hébergé par la société Vercel, situé Vercel Inc. Adresse postale : 440 N.
      Barranca Ave #4133 Covina California 9172, (contact téléphonique ou email
      : +18662583217).
    </p>
    <h2>Responsable de publication</h2>
    <p>
      Madame Maud Paula Rondao est la responsable de la publication et de la
      rédaction du site.
    </p>
    <h2>Nous contacter</h2>
    <ul>
      <li>Par téléphone : 0645590467</li>
      <li>Par email : maud.rondao@gmail.com</li>
      <li>Par courrier : 47 chemin des alouettes 17610 Chaniers</li>
    </ul>
    <h2>Données personnelles</h2>
    <p>
      Le traitement de vos données à caractère personnel est régi par notre
      Politique de confidentialitée, disponible depuis le pied de page à
      &quot;Politique de confidentialité&quot;, conformément au Règlement
      Général sur la Protection des Données («RGPD»). Règlement (UE) 2016/679 du
      Parlement européen et du Conseil du 27 avril 2016, rendu obligatoire
      depuis le 25 mai 2018.
    </p>
    <Wrapper>
      <span>Mise à jour le 05/05/2026</span>
    </Wrapper>
  </Container>
);

export default LegalNoticesPage;
