import prisma from '@/lib/prisma';
import { InitiativeType } from '@prisma/client';

const createTestInitiativeLocation = async (overrides = {}) => {
  return prisma.initiativeLocation.create({
    data: {
      street: '1 rue de Paris',
      postcode: '75000',
      city: 'Paris',
      latitude: 48.8566,
      longitude: 2.3522,
      ...overrides,
    },
  });
};

export const createTestInitiative = async (
  contributorId: string,
  overrides = {},
) => {
  const location = await createTestInitiativeLocation();

  return prisma.initiative.create({
    data: {
      name: 'Test Initiative',
      description: 'Test description',
      initiativeType: [InitiativeType.ClimateAgricultureEnergy],
      contributorId,
      initiativeLocationId: location.id,
      ...overrides,
    },
  });
};
