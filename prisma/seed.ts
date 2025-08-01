import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    const createdAt = faker.date.between({
      from: new Date('2020-01-01'),
      to: new Date(),
    });

    const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, 10);

    const users = await Promise.all(
      Array.from({ length: 5 }).map(async () => {
        const email = faker.internet.email();
        const password = await bcrypt.hash(faker.internet.password(), 10);

        await prisma.user.delete({ where: { email } }).catch(() => {});

        return prisma.user.create({
          data: {
            userName:
              faker.person.firstName() ||
              faker.helpers.arrayElement(companyName),
            email: email,
            password: hashedPassword,
            createdAt: createdAt,
            updatedAt: faker.date.between({ from: createdAt, to: new Date() }),
          },
        });
      }),
    );

    // const userAccounts = await Promise.all(userAccounts);

    const companyName = [
      'EcoSphère',
      'TerraVerde',
      'GreenPulse',
      'Alliance Naturelle',
      'Horizons Écologiques',
      'ÉcoCitoyens',
      'Biosphère Unifiée',
      'Planète Bleu',
    ];

    const initiativeType = [
      'Climat, Agriculture et Energie',
      'Culture et Transmissions',
      'Economie, Sociale et Solidaire',
      'Education et Sensibilisation',
      'Solidarite et Communautes',
      'Urbanisme et Technologie',
    ];

    const initiativeName = [
      'Récifs Sauvages',
      'Révolution Climatique',
      'Objectif Zéro Carbone',
      'Gardiens de la Nature',
      'Réseau Solaire',
      'ÉcoCitoyens',
      'Biosphère Unifiée',
      'Planète Bleu',
    ];

    const initiatives = await Promise.all(
      Array.from({ length: 8 }).map(async () => {
        const randomUser = faker.helpers.arrayElement(users);
        return prisma.initiative.create({
          data: {
            name: faker.helpers.arrayElement(initiativeName),
            description: faker.lorem.paragraph(),
            initiativeType: faker.helpers.arrayElement(initiativeType),
            narrative: faker.lorem.paragraph(),
            email: faker.internet.email(),
            webSite: faker.internet.url(),
            contributor: {
              connect: { id: randomUser.id },
            },
          },
        });
      }),
    );

    await Promise.all(
      initiatives.map(async (initiative) => {
        return prisma.address.create({
          data: {
            street: faker.location.streetAddress(),
            postcode: faker.location.zipCode(),
            city: faker.location.city(),
            country: faker.location.country(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
            initiative: {
              connect: { initiativeId: initiative.initiativeId },
            },
          },
        });
      }),
    );

    console.log('seeding conpleted successfully');
  } catch (error) {
    console.warn('Error While generating Seed: \n', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

export default seedDatabase();
