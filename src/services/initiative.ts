import { InitiativeCreationFormData } from '@/components/molecules/Forms/initiative-form/initiativeFormValidation';
import { prisma } from '@/lib/prisma/client';

export async function createAnInitiative(
  initiative: InitiativeCreationFormData,
  contributorId: number,
) {
  const location = await prisma.initiativeLocation.create({
    data: {
      street: initiative.address.street,
      postcode: initiative.address.zipCode,
      city: initiative.address.city,
      latitude: initiative.address.gps[1],
      longitude: initiative.address.gps[0],
    },
  });

  const createNewInitiative = await prisma.initiative.create({
    data: {
      name: initiative.name,
      description: initiative.description,
      initiativeType: initiative.initiativeType,
      contributorId,
      narrative: initiative.narrative,
      associationName: initiative.associationName,
      email: initiative.email,
      webSite: initiative.webSite,
      initiativeLocationId: location.id,
    },
    include: {
      contributor: true,
      initiativeLocation: true,
    },
  });

  return createNewInitiative;
}
