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
};

export const InitiativeOptions: {label: Initiative, description: string }[] = [
    {
      label: Initiative.ClimateAction, 
    description: "Actions visant à réduire les émissions de gaz à effet de serre et à limiter le réchauffement climatique, tout en promouvant la résilience des écosystèmes et des sociétés.",
    },
    {
      label: Initiative.ConservationOfBiodiversity, 
    description: "Protection des espèces et des écosystèmes pour préserver la diversité biologique et garantir le bon fonctionnement des systèmes naturels vitaux.",
    },
    {
      label: Initiative.SustainableNutrienManagment, 
    description: "Gestion responsable des nutriments pour éviter la pollution des sols et de l'eau, tout en assurant des pratiques agricoles durables.",
    },
    {
      label: Initiative.ReductionOfChemicalPollution, 
    description: "Réduction de l'utilisation et des émissions de produits chimiques toxiques pour prévenir la contamination de l'environnement et protéger la santé humaine.",
    },
    {
      label: Initiative.AirQuality, 
    description: "Amélioration de la qualité de l'air en réduisant les polluants atmosphériques nocifs pour la santé et le climat, et en promouvant des sources d'énergie plus propres.",
    },
    {
      label: Initiative.ProtectionOfTheOzoneLayer, 
    description: "Préservation de la couche d'ozone qui protège la Terre des rayonnements ultraviolets nocifs, notamment par l'élimination des substances appauvrissant cette couche.",
    },
    {
      label: Initiative.OceanProtection, 
    description:"Préservation des océans et des ressources marines contre la pollution, la surpêche et les effets du changement climatique, pour garantir un équilibre écologique.",
    },
    {
      label: Initiative.SustainableWaterMangement, 
    description: "Gestion durable des ressources en eau pour assurer leur disponibilité à long terme, tout en réduisant la pollution et en optimisant l'usage de l'eau.",
    },
    {
      label: Initiative.SustainableManagmentOfTerritories, 
    description: "Aménagement du territoire qui respecte les limites écologiques, en préservant les espaces naturels et en favorisant des pratiques humaines responsables et résilientes.",
    },
    {
      label: Initiative.SocialEquityAndEducation, 
    description: "Promotion de l'équité sociale, de l'accès à l'éducation et du renforcement des capacités pour permettre aux communautés de participer activement à la lutte contre le changement climatique."
    },
];