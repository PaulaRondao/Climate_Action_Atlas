import bcrypt from 'bcrypt';
import { fakerFR as faker } from '@faker-js/faker';
import { PrismaClient, InitiativeType } from '@prisma/client';
import { promises as fs } from 'fs';

const prisma = new PrismaClient();

async function importGeoJson(filePath: string) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const geoJson = JSON.parse(fileContent);
    return geoJson.features.map((feature: any) => ({
      street: feature.properties.street,
      postcode: feature.properties.postcode,
      city: feature.properties.city,
      country: 'France', // par défaut
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0],
    }));
  } catch (error) {
    throw new Error(`Error parsing GeoJSON file: ${error}`);
  }
}

const seedDatabase = async () => {
  try {
    const locations = await importGeoJson('prisma/data.structure.geojson');

    // Types d'initiatives
    const initiativeTypes = Object.values(InitiativeType);

    // Hash du mot de passe pour tous les utilisateurs
    const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de quelques utilisateurs
    const createdAt = faker.date.between({
      from: new Date('2020-01-01'),
      to: new Date(),
    });
    const users = await Promise.all(
      Array.from({ length: 8 }).map(async () => {
        const email = faker.internet.email();
        await prisma.user.delete({ where: { email } }).catch(() => {});
        return prisma.user.create({
          data: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            userName: faker.person.middleName(),
            email: email,
            password: hashedPassword,
            createdAt,
            updatedAt: faker.date.between({ from: createdAt, to: new Date() }),
          },
        });
      }),
    );

    // Initiatives fixes à insérer dans l'ordre
    const fixedInitiatives = [
      {
        name: 'Roule ma frite',
        type: InitiativeType.ClimateAgricultureEnergy,
        locationIndex: 0,
      },
      {
        name: 'Cinema le Kursaal',
        type: InitiativeType.CultureAndTransmission,
        locationIndex: 1,
      },
      {
        name: 'Eco-lieu familial Mandala',
        type: InitiativeType.UrbanismAndTechnology,
        locationIndex: 2,
      },
    ];

    for (const fixed of fixedInitiatives) {
      const randomUser = faker.helpers.arrayElement(users);
      const loc = locations[fixed.locationIndex];

      const newLocation = await prisma.initiativeLocation.create({
        data: {
          street: loc.street,
          postcode: loc.postcode,
          city: loc.city,
          country: loc.country,
          latitude: loc.latitude,
          longitude: loc.longitude,
        },
      });

      await prisma.initiative.create({
        data: {
          name: fixed.name,
          description: faker.lorem.paragraph(),
          initiativeType: [fixed.type],
          narrative: faker.lorem.paragraph(),
          email: faker.internet.email(),
          webSite: faker.internet.url(),
          contributor: { connect: { id: randomUser.id } },
          initiativeLocation: { connect: { id: newLocation.id } },
        },
      });
    }

    // Génération des autres initiatives aléatoires
    for (let i = 3; i < locations.length; i++) {
      const randomUser = faker.helpers.arrayElement(users);
      const loc = locations[i];
      const randomCount = Math.floor(Math.random() * 3) + 1;

      const newLocation = await prisma.initiativeLocation.create({
        data: {
          street: loc.street,
          postcode: loc.postcode,
          city: loc.city,
          country: loc.country,
          latitude: loc.latitude,
          longitude: loc.longitude,
        },
      });

      await prisma.initiative.create({
        data: {
          name: faker.company.name(),
          description: faker.lorem.paragraph(),
          initiativeType: faker.helpers.arrayElements(
            initiativeTypes,
            randomCount,
          ),
          narrative: faker.lorem.paragraph(),
          email: faker.internet.email(),
          webSite: faker.internet.url(),
          contributor: { connect: { id: randomUser.id } },
          initiativeLocation: { connect: { id: newLocation.id } },
        },
      });
    }

    console.log('Seeding completed successfully');
  } catch (error) {
    console.warn('Error while generating seeds: ', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

export default seedDatabase();
