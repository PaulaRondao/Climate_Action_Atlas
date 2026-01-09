import { Container } from '@/styles/components';
import React from 'react';

const LegalNoticesPage = (): JSX.Element => (
  <Container>
    <h1>Mentions légales</h1>
    <p>Mise à jour le 05/05/2026</p>
    <p>
      Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
      la confiance en l&apos;économie numérique, il est précisé aux utilisateurs
      du site Climate Action Atlas l&apos;identité des différents intervenants
      dans le cadre de sa réalisation et de son suivi.
    </p>

    <h2>Édition du site</h2>
    <p>
      Le présent site, accessible à l’URL www.climate-action-atlas.fr (le « Site
      »), est édité par : Maud Paula Rondao, résidant 47 chemin des alouettes
      17610 Chaniers, de nationalité Française (France), né(e) le 19/07/1987,
    </p>
    <h2>Hébergement</h2>
    <p>
      Le Site est hébergé par la société Vercel, situé Vercel Inc. Adresse
      postale : 440 N. Barranca Ave #4133 Covina California 9172, (contact
      téléphonique ou email : +18662583217).
    </p>
    <h2>Directrice de publication</h2>
    <p>La Directrice de la publication du Site est Maud Paula Rondao.</p>
    <h2>Nous contacter</h2>
    <ul>
      <li>Par téléphone : +33645590467</li>
      <li>Par email : maud.rondao@gmail.com</li>
      <li>Par courrier : 47 chemin des alouettes 17610 Chaniers</li>
    </ul>
    <h2>Données personnelles</h2>
    <p>
      Le traitement de vos données à caractère personnel est régi par notre
      Charte du respect de la vie privée, disponible depuis la section
      &quot;Charte de Protection des Données Personnelles&quot;, conformément au
      Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016
      («RGPD»).
    </p>
  </Container>
);

export default LegalNoticesPage;
