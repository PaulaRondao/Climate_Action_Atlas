import { PrismaClient, InitiativeType, UserRole } from '@prisma/client';
import { promises as fs } from 'fs';
import { fakerFR as faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Fonction pour importer le GeoJSON
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
    console.error(`Error parsing GeoJSON file: ${error}`);
    return []; // retourne un tableau vide si problème
  }
}

// Données des utilisateurs
const users = [
  {
    id: '1234',
    name: 'Margot',
    email: 'margot@mail.com',
    role: UserRole.CONTRIBUTOR,
  },
  {
    id: '5678',
    name: 'Olivier',
    email: 'olivier@mail.com',
    role: UserRole.CONTRIBUTOR,
  },
  {
    id: '9876',
    name: 'Sarah',
    email: 'sarah@mail.com',
    role: UserRole.CONTRIBUTOR,
  },
  {
    id: '2468',
    name: 'Fatima',
    email: 'fatima@mail.com',
    role: UserRole.CONTRIBUTOR,
  },
  {
    id: '3570',
    name: 'Karim',
    email: 'karim@mail.com',
    role: UserRole.CONTRIBUTOR,
  },
  {
    id: '6498',
    name: 'Sylla',
    email: 'sylla@mail.com',
    role: UserRole.CONTRIBUTOR,
  },
  {
    id: '4936',
    name: 'Lou',
    email: 'lou@mail.com',
    role: UserRole.CONTRIBUTOR,
  },
];

// Données des initiatives
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
  {
    name: 'Accorderie du Pays de Saint-Gilles-Croix-de-Vie',
    type: InitiativeType.SolidarityAndCommunities,
    locationIndex: 3,
    contributorId: '2468',
  },
  {
    name: 'Repair Café Montferrier',
    type: InitiativeType.SocialAndSolidarityEconomy,
    locationIndex: 4,
    contributorId: '3570',
  },
];

export const seedDatabase = async () => {
  try {
    // Import GeoJSON
    const locations = await importGeoJson('prisma/data.structure.geojson');

    // Création des utilisateurs
    for (const user of users) {
      await prisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: true,
          role: user.role,
        },
      });
    }

    // Création des initiatives avec leur localisation
    for (const init of initiatives) {
      const loc = locations[init.locationIndex];

      // Si le GeoJSON n'a pas de donnée, skip
      if (!loc) continue;

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

    console.log('✅ Seeding completed successfully');
  } catch (error) {
    console.error('Error while seeding database: ', error);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
