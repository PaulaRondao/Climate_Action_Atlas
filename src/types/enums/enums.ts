import { Options } from '@/types/Form';
import { $Enums } from '@prisma/client';

export enum PageTitle {
  MovementForChange = 'Un mouvement pour changer',
  HowToGetInvolved = 'Ajouter une initiative',
  UserForm = 'Agir maintenant',
  InitiativeForm = 'Engagez-vous',
  MentionsLegales = 'Mentions légales - Climate Action Atlas',
  PolitiqueDeConfidentialite = 'Politique de confidentialité - Climate Action Atlas',
}

export enum Description {
  ClimatActionTitle = 'Climate Action Atlas est un mouvement actif. Nous partageons le désir d’une action urgente et juste pour répondre aux urgences climatiques et naturelles.',
  InitiativeTitle = 'Ajoutez vos projets pour contribuer à un monde plus respectueux des limites écologiques et encourager un changement collectif',
  CommitmentTitle = "L’engagement de chacun est essentiel pour préserver notre planète. Agissez dès aujourd'hui pour un futur plus vert.",
  InitiativeToAdd = 'Chaque geste compte. En ajoutant une initiative, vous participez activement à un projet commun qui peut inspirer d’autres à s’engager. Ensemble, nous pouvons faire la différence, une initiative à la fois.',
  CommitmentToUser = 'Découvrez comment votre engagement peut contribuer à un avenir durable et respectueux des limites planétaires.',
  CommitmentToAssociation = 'Votre engagement fait la différence. Ensemble, nous pouvons dépasser les défis environnementaux.',
  AccountDelete = 'La suppression de votre compte entraine la désactivation de votre accès à votre espace personnel, la suppression des initiatives que vous aurez créé ainsi que la suppression de vos données personnelles liées. Conformément à la réglementation, certaines données sont obligatoirement conservées pour une durée déterminée avant suppression définitive : ces données seront archivées et anonymisées dans le respect de notre politique de confidentialité.',
}

export enum InitiativesLabel {
  ClimateAgricultureEnergy = 'Climat, Agriculture et Énergie',
  NatureAndBiodiversity = 'Nature et Biodiversité',
  UrbanismAndTechnology = 'Urbanisme et Technologie',
  SolidarityAndCommunities = 'Solidarité et Communautés',
  CultureAndTransmission = 'Culture et Transmission',
  EducationAndAwareness = 'Education et Sensibilisation',
  SocialAndSolidarityEconomy = 'Économie Sociale et Solidaire',
}

export const initiativesLabelTypeObject = Object.values(InitiativesLabel) as [
  InitiativesLabel,
  ...InitiativesLabel[],
];

export const TypeImpact = Object.entries(InitiativesLabel).map(
  ([key, label]) => ({
    label,
    value: key,
  }),
) as { label: string; value: keyof typeof InitiativesLabel }[];

export const InitiativeOptions: {
  label: InitiativesLabel;
  description: string;
  logo: string;
}[] = [
  {
    label: InitiativesLabel.ClimateAgricultureEnergy,
    description:
      'Actions pour préserver l’environnement, et les ressources naturelles, en promouvant une agriculture durable et des solutions énergétiques respectueuses du vivant.',
    logo: '/icons/climat.svg',
  },
  {
    label: InitiativesLabel.NatureAndBiodiversity,
    description:
      'Actions pour préserver la biodiversité, toutes formes de vie sur Terre, en proposant des actions pour protéger le vivant.',
    logo: '/icons/nature.svg',
  },
  {
    label: InitiativesLabel.UrbanismAndTechnology,
    description:
      'Innovations accessibles, low-tech, bricolage et systèmes D pour répondre aux besoins essentiels avec ingéniosité, dans une logique de sobriété et d’autonomie.',
    logo: '/icons/urbanisme.svg',
  },
  {
    label: InitiativesLabel.SolidarityAndCommunities,
    description:
      "Projets ancrés dans l'entraide, l'inclusion, les dynamiques collectives et les réseaux de solidarité locale, pour renforcer le lien social et l'action citoyenne.",
    logo: '/icons/solidarite.svg',
  },
  {
    label: InitiativesLabel.CultureAndTransmission,
    description:
      'Initiatives qui préservent, réinventent ou partagent les cultures locales, les savoir-faire, les récits, et les expressions artistiques, pour nourrir une mémoire vivante.',
    logo: '/icons/culture.svg',
  },
  {
    label: InitiativesLabel.EducationAndAwareness,
    description:
      'Formes d’éducation libres, actives ou engagées pour éveiller les consciences, transmettre autrement et encourager la pensée critique face aux enjeux contemporains.',
    logo: '/icons/education.svg',
  },
  {
    label: InitiativesLabel.SocialAndSolidarityEconomy,
    description:
      'Approches économiques alternatives pour produire, échanger et financer de manière locale, équitable et respectueuse des humains et de l’environnement.',
    logo: '/icons/economie.svg',
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

export const InitiativeTypeToLabel: Record<
  $Enums.InitiativeType,
  InitiativesLabel
> = {
  ClimateAgricultureEnergy: InitiativesLabel.ClimateAgricultureEnergy,
  NatureAndBiodiversity: InitiativesLabel.NatureAndBiodiversity,
  UrbanismAndTechnology: InitiativesLabel.UrbanismAndTechnology,
  SolidarityAndCommunities: InitiativesLabel.SolidarityAndCommunities,
  CultureAndTransmission: InitiativesLabel.CultureAndTransmission,
  EducationAndAwareness: InitiativesLabel.EducationAndAwareness,
  SocialAndSolidarityEconomy: InitiativesLabel.SocialAndSolidarityEconomy,
};

export const LabelToInitiativeType: Record<
  InitiativesLabel,
  $Enums.InitiativeType
> = {
  [InitiativesLabel.ClimateAgricultureEnergy]: 'ClimateAgricultureEnergy',
  [InitiativesLabel.NatureAndBiodiversity]: 'NatureAndBiodiversity',
  [InitiativesLabel.UrbanismAndTechnology]: 'UrbanismAndTechnology',
  [InitiativesLabel.SolidarityAndCommunities]: 'SolidarityAndCommunities',
  [InitiativesLabel.CultureAndTransmission]: 'CultureAndTransmission',
  [InitiativesLabel.EducationAndAwareness]: 'EducationAndAwareness',
  [InitiativesLabel.SocialAndSolidarityEconomy]: 'SocialAndSolidarityEconomy',
};

export const ActionsOption: {
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'Agir local penser global',
    description:
      'Découvrez les initiatives près de chez vous pour lutter contre le changement climatique.',
    image: '/images/agirLocal.png',
  },
  {
    title: 'Carte intéraction',
    description:
      'Trouvez et rejoignez facilement des projets concrets et inspirants autour de vous.',
    image: '/images/carteInteractive.png',
  },
  {
    title: 'Mobilisation citoyenne',
    description:
      'Partagez, créez et collaborez avec une communauté engagée pour l’humain et la planète.',
    image: '/images/mobilisation.png',
  },
  {
    title: 'Impact réel',
    description:
      'Chaque action compte : faites la différence aujourd’hui, pour un demain durable.',
    image: '/images/impact.png',
  },
];
