import { Options } from './SelectList';

export enum PageTitle {
  MovementForChange = 'Un mouvement pour changer',
  HowToGetInvolved = 'Ajouter une initiative',
  UserForm = 'Agir maintenant',
  AssociationForm = 'Engagez votre association',
  MentionsLegales = 'Mentions légales - Climate Action Atlas',
  PolitiqueDeConfidentialite = 'Politique de confidentialité - Climate Action Atlas',
  PolitiqueDeCookies = 'Politique de Cookies - Climate Action Atlas',
}

export enum Description {
  ClimatActionTitle = 'Climate Action Atlas est un mouvement actif. Nous partageons le désir d’une action urgente et juste pour répondre aux urgences climatiques et naturelles.',
  InitiativeTitle = 'Ajoutez vos projets pour contribuer à un monde plus respectueux des limites écologiques et encourager un changement collectif',
  CommitmentTitle = "L’engagement de chacun est essentiel pour préserver notre planète. Agissez dès aujourd'hui pour un futur plus vert.",
  InitiativeToUser = 'Chaque geste compte. En ajoutant une initiative locale, vous participez activement à la préservation de notre planète en respectant les limites écologiques qui régissent notre avenir commun. Qu’il s’agisse d’un projet de recyclage, d’une action pour la biodiversité ou de solutions pour une consommation durable, votre idée peut inspirer d’autres à s’engager. Ensemble, nous pouvons faire la différence, une initiative à la fois.',
  InitiativeToAssociation = 'Votre initiative agit pour la planète, la solidarité ou les savoirs ? Qu’elle touche à l’environnement, à la low-tech, aux cultures locales ou à l’éducation engagée, référencez-la ici pour la faire connaître et inspirer le changement.',
  CommitmentToUser = 'Découvrez comment votre engagement peut contribuer à un avenir durable et respectueux des limites planétaires.',
  CommitmentToAssociation = 'Votre engagement fait la différence. Ensemble, nous pouvons dépasser les défis environnementaux.',
}

export enum Initiative {
  ClimateAgricultureEnergy = 'Climat, Agriculture et Énergie',
  UrbanismAndTechnology = 'Urbanisme et Technologie',
  SolidarityAndCommunities = 'Solidarité et Communautés',
  CultureAndTransmission = 'Culture et Transmission',
  EducationAndAwareness = 'Education et Sensibilisation',
  SocialAndSolidarityEconomy = 'Économie Sociale et Solidaire',
}

export const TypeImpact = Object.entries(Initiative).map(([key, label]) => ({
  label,
  value: key,
})) as { label: string; value: keyof typeof Initiative }[];

export const InitiativeOptions: { label: Initiative; description: string }[] = [
  {
    label: Initiative.ClimateAgricultureEnergy,
    description:
      'Actions pour préserver l’environnement, la biodiversité et les ressources naturelles, en promouvant une agriculture durable et des solutions énergétiques respectueuses du vivant.',
  },
  {
    label: Initiative.UrbanismAndTechnology,
    description:
      'Innovations accessibles, low-tech, bricolage et systèmes D pour répondre aux besoins essentiels avec ingéniosité, dans une logique de sobriété et d’autonomie.',
  },
  {
    label: Initiative.SolidarityAndCommunities,
    description:
      "Projets ancrés dans l'entraide, l'inclusion, les dynamiques collectives et les réseaux de solidarité locale, pour renforcer le lien social et l'action citoyenne.",
  },
  {
    label: Initiative.CultureAndTransmission,
    description:
      'Initiatives qui préservent, réinventent ou partagent les cultures locales, les savoir-faire, les récits, et les expressions artistiques, pour nourrir une mémoire vivante.',
  },
  {
    label: Initiative.EducationAndAwareness,
    description:
      'Formes d’éducation libres, actives ou engagées pour éveiller les consciences, transmettre autrement et encourager la pensée critique face aux enjeux contemporains.',
  },
  {
    label: Initiative.SocialAndSolidarityEconomy,
    description:
      'Approches économiques alternatives pour produire, échanger et financer de manière locale, équitable et respectueuse des humains et de l’environnement.',
  },
];

export enum SelectItems {
  OUI = 'OUI',
  NON = 'NON',
  INDEFINI = 'INDEFINI',
}

export const SelectOptions: Options[] = [
  { label: 'Oui', value: SelectItems.OUI },
  { label: 'Non', value: SelectItems.NON },
  { label: 'Je ne sais pas', value: SelectItems.INDEFINI },
];
