import { Initiatives } from '@/types/enums/initiatives';
import { InitiativeCreationFormData } from '@/validation/initiativeSchema';
import { Initiative, InitiativeLocation } from '@prisma/client';

export const initiativeFormHelper: InitiativeCreationFormData = {
  name: 'La Ruche Magulas',
  description: 'Distribution hebdomadaire de produits fermiers',
  initiativeType: [Initiatives.ClimateAgricultureEnergy],
  narrative: 'Des produits de qualités',
  associationName: 'La Ruche qui dit Oui',
  email: undefined,
  webSite: 'https://laruchequiditoui.fr/fr/assemblies/12199',
  address: {
    city: 'Saint-Médard-en-Jalles',
    label: 'La Ruche',
    street: '5 Rue Jean Henri Fabre',
    zipCode: '33160',
    gps: [-0.733423, 44.863644],
  },
};

export const initiativeLocationHelper: InitiativeLocation = {
  id: 3,
  street: '5 Rue Jean Henri Fabre',
  postcode: '33160',
  city: 'Saint-Médard-en-Jalles',
  latitude: 44.863644,
  longitude: -0.733423,
};

export const initiativeWithRelationsHelper: Initiative = {
  id: 3,
  name: 'La Ruche Magulas',
  description: 'Distribution hebdomadaire de produits fermiers',
  initiativeType: [Initiatives.ClimateAgricultureEnergy],
  narrative: 'Des produits de qualités',
  associationName: 'La Ruche qui dit Oui',
  email: null,
  webSite: 'https://laruchequiditoui.fr/fr/assemblies/12199',
  createdAt: new Date(),
  updatedAt: new Date(),
  contributorId: '4563874',
  initiativeLocationId: initiativeLocationHelper.id,
};
