import { PrismaClient, InitiativeType } from '@prisma/client';
import { promises as fs } from 'fs';
import { fakerFR as faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function importGeoJson(filePath: string) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const geoJson = JSON.parse(fileContent);
    return geoJson.features.map((address: any) => ({
      street: address.properties.street,
      postcode: address.properties.postcode,
      city: address.properties.city,
      latitude: address.geometry.coordinates[1],
      longitude: address.geometry.coordinates[0],
    }));
  } catch (error) {
    throw new Error(`Error parsing GeoJSON file: ${error}`);
  }
}

const users = [
  {
    id: '1234',
    name: 'Margot',
    email: 'margot@mail.com',
    role: 'CONTRIBUTOR',
  },
  {
    id: '5678',
    name: 'Olivier',
    email: 'olivier@mail.com',
    role: 'CONTRIBUTOR',
  },
  {
    id: '9876',
    name: 'Sarah',
    email: 'sarah@mail.com',
    role: 'CONTRIBUTOR',
  },
];

const initiatives = [
  {
    name: 'Roule ma frite',
    type: InitiativeType.ClimateAgricultureEnergy,
    locationIndex: 0,
    contributorId: '9876',
  },
  {
    name: 'Cinema le Kursaal',
    type: InitiativeType.CultureAndTransmission,
    locationIndex: 1,
    contributorId: '5678',
  },
  {
    name: 'Eco-lieu familial Mandala',
    type: InitiativeType.UrbanismAndTechnology,
    locationIndex: 2,
    contributorId: '1234',
  },
];

const seedDatabase = async () => {
  try {
    const locations = await importGeoJson('prisma/data.structure.geojson');

    await prisma.initiative.deleteMany({});
    await prisma.initiativeLocation.deleteMany({});
    await prisma.user.deleteMany({});

    for (const user of users) {
      await prisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: true,
        },
      });
    }

    for (const init of initiatives) {
      const loc = locations[init.locationIndex];

      const newLocation = await prisma.initiativeLocation.create({
        data: {
          street: loc.street,
          postcode: loc.postcode,
          city: loc.city,
          latitude: loc.latitude,
          longitude: loc.longitude,
        },
      });

      await prisma.initiative.create({
        data: {
          name: init.name,
          description: faker.lorem.paragraph(),
          initiativeType: [init.type],
          narrative: faker.lorem.paragraph(),
          email: faker.internet.email(),
          webSite: faker.internet.url(),
          contributor: { connect: { id: init.contributorId } },
          initiativeLocation: { connect: { id: newLocation.id } },
        },
      });
    }

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error while seeding database: ', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
