import { Options } from './SelectList';

export enum InitiativeType {
  ACTIONS_CLIMATIQUE = 'ACTIONS_CLIMATIQUE',
  CONSERVATION_DE_LA_BIODIVERSITE = 'CONSERVATION_DE_LA_BIODIVERSITE',
  GESTION_DURABLE_DES_NUTRIMENTS = 'GESTION_DURABLE_DES_NUTRIMENTS',
  REDUCTION_DE_LA_POLLUTION = 'REDUCTION_DE_LA_POLLUTION',
  QUALITE_DE_L_AIR = 'QUALITE_DE_L_AIR',
  PROTECTION_DE_DE_LA_COUCHE_D_OZONE = 'PROTECTION_DE_DE_LA_COUCHE_D_OZONE',
  PROTECTIONS_DES_OCEANS = 'PROTECTIONS_DES_OCEANS',
  GESTION_DURABLE_DE_L_EAU = 'GESTION_DURABLE_DE_L_EAU',
  GESTION_DURABLE_DES_TERRITOIRES = 'GESTION_DURABLE_DES_TERRITOIRES',
  EQUITE_SOCIALE_ET_EDUCATION = 'EQUITE_SOCIALE_ET_EDUCATION',
}

export enum UserRole {
  CONTRIBUTOR = 'CONTRIBUTOR',
  ORGANIZER = 'ORGANIZER',
}

export enum ResponseOptionsEnums {
  OUI = 'OUI',
  NON = 'NON',
  INDEFINI = 'INDEFINI',
}

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
  InitiativeToAssociation = "Votre association travaille déjà à un projet concret pour respecter les limites planétaires ? Ajoutez-le ici pour le faire connaître au monde entier. En répertoriant vos initiatives, vous contribuez à la diffusion de solutions locales et durables, renforçant ainsi le mouvement global en faveur d'un avenir respectueux des ressources de la Terre. Plus de visibilité, plus de soutien, plus de changement : ensemble, nous agissons pour la planète.",
  CommitmentToUser = 'Découvrez comment votre engagement peut contribuer à un avenir durable et respectueux des limites planétaires.',
  CommitmentToAssociation = 'Votre engagement fait la différence. Ensemble, nous pouvons dépasser les défis environnementaux.',
}

export enum Initiative {
  ClimateAction = 'Action climatique',
  ConservationOfBiodiversity = 'Conservation de la biodoversité',
  SustainableNutrienManagment = 'Gestion durable des nutriments',
  ReductionOfChemicalPollution = 'Réduction de la pollution chimique',
  AirQuality = "Qualité de l'air",
  ProtectionOfTheOzoneLayer = "Protection de la couche d'ozone",
  OceanProtection = 'Protection des océans',
  SustainableWaterMangement = "Gestion durable de l'eau",
  SustainableManagmentOfTerritories = 'Gestion durable des territoires',
  SocialEquityAndEducation = 'Équité sociale et éducation',
}

export const InitiativeOptions: { label: Initiative; description: string }[] = [
  {
    label: Initiative.ClimateAction,
    description:
      'Actions visant à réduire les émissions de gaz à effet de serre et à limiter le réchauffement climatique, tout en promouvant la résilience des écosystèmes et des sociétés.',
  },
  {
    label: Initiative.ConservationOfBiodiversity,
    description:
      'Protection des espèces et des écosystèmes pour préserver la diversité biologique et garantir le bon fonctionnement des systèmes naturels vitaux.',
  },
  {
    label: Initiative.SustainableNutrienManagment,
    description:
      "Gestion responsable des nutriments pour éviter la pollution des sols et de l'eau, tout en assurant des pratiques agricoles durables.",
  },
  {
    label: Initiative.ReductionOfChemicalPollution,
    description:
      "Réduction de l'utilisation et des émissions de produits chimiques toxiques pour prévenir la contamination de l'environnement et protéger la santé humaine.",
  },
  {
    label: Initiative.AirQuality,
    description:
      "Amélioration de la qualité de l'air en réduisant les polluants atmosphériques nocifs pour la santé et le climat, et en promouvant des sources d'énergie plus propres.",
  },
  {
    label: Initiative.ProtectionOfTheOzoneLayer,
    description:
      "Préservation de la couche d'ozone qui protège la Terre des rayonnements ultraviolets nocifs, notamment par l'élimination des substances appauvrissant cette couche.",
  },
  {
    label: Initiative.OceanProtection,
    description:
      'Préservation des océans et des ressources marines contre la pollution, la surpêche et les effets du changement climatique, pour garantir un équilibre écologique.',
  },
  {
    label: Initiative.SustainableWaterMangement,
    description:
      "Gestion durable des ressources en eau pour assurer leur disponibilité à long terme, tout en réduisant la pollution et en optimisant l'usage de l'eau.",
  },
  {
    label: Initiative.SustainableManagmentOfTerritories,
    description:
      'Aménagement du territoire qui respecte les limites écologiques, en préservant les espaces naturels et en favorisant des pratiques humaines responsables et résilientes.',
  },
  {
    label: Initiative.SocialEquityAndEducation,
    description:
      "Promotion de l'équité sociale, de l'accès à l'éducation et du renforcement des capacités pour permettre aux communautés de participer activement à la lutte contre le changement climatique.",
  },
];

export const ResponseOptions = [
  { label: 'Oui', value: ResponseOptionsEnums.OUI },
  { label: 'Non', value: ResponseOptionsEnums.NON },
  { label: 'Je ne sais pas', value: ResponseOptionsEnums.INDEFINI }
]
