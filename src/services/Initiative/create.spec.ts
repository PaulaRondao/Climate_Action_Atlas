import { prismaMock } from '../../../singleton';
import { createAnInitiative } from './create';
import {
  initiativeFormHelper,
  initiativeLocationHelper,
  initiativeWithRelationsHelper,
} from './initiative.helpers';

describe('createAnInitiative', () => {
  const contributorId = '4563874';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create an initiative', async () => {
    prismaMock.initiativeLocation.create.mockResolvedValue(
      initiativeLocationHelper,
    );
    prismaMock.initiative.create.mockResolvedValue({
      ...initiativeWithRelationsHelper,
      initiativeLocationId: initiativeLocationHelper.id,
    });

    const result = await createAnInitiative(
      initiativeFormHelper,
      contributorId,
    );
    expect(result).toEqual(initiativeWithRelationsHelper);

    expect(prismaMock.initiativeLocation.create).toHaveBeenCalledWith({
      data: {
        street: initiativeFormHelper.address.street,
        postcode: initiativeFormHelper.address.zipCode,
        city: initiativeFormHelper.address.city,
        latitude: initiativeFormHelper.address.gps[1],
        longitude: initiativeFormHelper.address.gps[0],
      },
    });

    expect(prismaMock.initiative.create).toHaveBeenCalledWith({
      data: {
        name: initiativeFormHelper.name,
        description: initiativeFormHelper.description,
        initiativeType: initiativeFormHelper.initiativeType,
        contributorId: contributorId,
        narrative: initiativeFormHelper.narrative,
        associationName: initiativeFormHelper.associationName,
        email: initiativeFormHelper.email,
        webSite: initiativeFormHelper.webSite,
        initiativeLocationId: initiativeLocationHelper.id,
      },
      include: {
        contributor: true,
        initiativeLocation: true,
      },
    });
  });
});
