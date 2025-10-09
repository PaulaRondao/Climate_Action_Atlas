import bcrypt from 'bcrypt';
import { fakerFR as faker } from '@faker-js/faker';
import { PrismaClient, InitiativeType } from '@prisma/client';
import { promises as fs } from 'fs';

const prisma = new PrismaClient();

async function importJsonFile(filePath: string) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    throw new Error(`Error parsing JSON file : ${error}`);
  }
}

const seedDatabase = async () => {
  try {
    const jsonData = await importJsonFile('prisma/data.structure.json');

    const initiativeTypes = Object.values(InitiativeType);
    const randomCount = Math.floor(Math.random() * 6) + 1;

    const createdAt = faker.date.between({
      from: new Date('2020-01-01'),
      to: new Date(),
    });

    const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, 10);

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

    const users = await Promise.all(
      Array.from({ length: 8 }).map(async () => {
        const email = faker.internet.email();

        await prisma.user.delete({ where: { email } }).catch(() => {});

        return prisma.user.create({
          data: {
            userName: faker.person.firstName(),
            email: email,
            password: hashedPassword,
            createdAt: createdAt,
            updatedAt: faker.date.between({ from: createdAt, to: new Date() }),
          },
        });
      }),
    );

    for (const item of jsonData) {
      const randomUser = faker.helpers.arrayElement(users);

      const newLocation = await prisma.initiativeLocation.create({
        data: {
          street: item.street,
          postcode: item.postcode,
          city: item.city,
          country: item.country,
          latitude: item.latitude,
          longitude: item.longitude,
        },
      });

      await prisma.initiative.create({
        data: {
          name: faker.helpers.arrayElement(initiativeName),
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

    console.log('seeding conpleted successfully');
  } catch (error) {
    console.warn('Error while generating Seed: ', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

export default seedDatabase();
