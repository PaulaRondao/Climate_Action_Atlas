export enum Initiatives {
  ClimateAgricultureEnergy = 'ClimateAgricultureEnergy',
  NatureAndBiodiversity = 'NatureAndBiodiversity',
  UrbanismAndTechnology = 'UrbanismAndTechnology',
  SolidarityAndCommunities = 'SolidarityAndCommunities',
  CultureAndTransmission = 'CultureAndTransmission',
  EducationAndAwareness = 'EducationAndAwareness',
  SocialAndSolidarityEconomy = 'SocialAndSolidarityEconomy',
}

export const initiativeTypeKeys = Object.keys(Initiatives) as [
  keyof typeof Initiatives,
  ...Array<keyof typeof Initiatives>,
];
