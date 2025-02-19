import bcrypt from 'bcrypt';
import { faker } from "@faker-js/faker";
import { InitiativeType, ResponseOption, PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    
    const createdAt = faker.date.between({
      from: new Date("2020-01-01"),
      to: new Date(),
    });

    const responseOptionArray = [
      ResponseOption.INDEFINI,
      ResponseOption.NON,
      ResponseOption.OUI,
    ];

    const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, 10);    

    const userAccountsPromises = Array.from({ length: 5 }).map(async() => {
      const email = faker.internet.email();
      // Essayer de supprimer un utilisateur existant avec le même email
      await prisma.userAccount.delete({
        where: { email }
      }).catch(() => {
        // Ignorer l'erreur si aucun utilisateur avec cet email n'existe
      });

      return prisma.userAccount.create({
        data: {
          userName: faker.person.firstName(),
          email: email,
          password: hashedPassword,
          role: "CONTRIBUTOR",
          createdAt: createdAt,
          updatedAt: faker.date.between({
            from: createdAt,
            to: new Date(),
          }),
          lastConnect: faker.date.recent(),
        },
      });
    });
    
    const userAccounts = await Promise.all(userAccountsPromises);

    const companyName = [
      "EcoSphère",  
      "TerraVerde",
      "GreenPulse",
      "Alliance Naturelle",
      "Horizons Écologiques",
      "ÉcoCitoyens",
      "Biosphère Unifiée",
      "Planète Bleu",
    ];

    const companyAccountsPromises = Array.from({ length: 3 }).map(async() => {
      const email = faker.internet.email();
      // Essayer de supprimer un utilisateur existant avec le même email
      await prisma.userAccount.delete({
        where: { email }
      }).catch(() => {
        // Ignorer l'erreur si aucun utilisateur avec cet email n'existe
      });

      return prisma.companyAccount.create({
        data: {
          companyName: faker.helpers.arrayElement(companyName),
          phoneNumber: faker.phone.number(),
          email: email,
          password: hashedPassword,
          locationId: faker.number.int({ min: 1, max: 1000 }),
          role: "ORGANIZER",
          siret: faker.string.numeric(14),
          createdAt: createdAt,
          updatedAt: faker.date.between({
            from: createdAt,
            to: new Date(),
          }),
        },
      });
    });

    const companyAccounts = await Promise.all((companyAccountsPromises));

    const initiativeTypeArray = [
      InitiativeType.ACTIONS_CLIMATIQUE,
      InitiativeType.CONSERVATION_DE_LA_BIODIVERSITE,
      InitiativeType.GESTION_DURABLE_DES_NUTRIMENTS,
      InitiativeType.REDUCTION_DE_LA_POLLUTION,
      InitiativeType.QUALITE_DE_L_AIR,
      InitiativeType.PROTECTION_DE_DE_LA_COUCHE_D_OZONE,
      InitiativeType.PROTECTIONS_DES_OCEANS,
      InitiativeType.GESTION_DURABLE_DE_L_EAU,
      InitiativeType.GESTION_DURABLE_DES_TERRITOIRES,
      InitiativeType.EQUITE_SOCIALE_ET_EDUCATION
    ];

    const userRoleArray = [
      UserRole.CONTRIBUTOR,
      UserRole.ORGANIZER
    ];

    const initiativeName = [
      "Récifs Sauvages",  
      "Révolution Climatique",
      "Objectif Zéro Carbone",
      "Gardiens de la Nature",
      "Réseau Solaire",
      "ÉcoCitoyens",
      "Biosphère Unifiée",
      "Planète Bleu",
    ];

    const initiativesPromises = Array.from({ length: 8}).map(async () => {

      return prisma.initiative.create({
        data: {
          name: faker.helpers.arrayElement(initiativeName),
          description: faker.lorem.paragraph(),
          spokenLanguages: faker.helpers.arrayElement(responseOptionArray),
          financialParticipation: faker.helpers.arrayElement(responseOptionArray),
          registrationRequired: faker.helpers.arrayElement(responseOptionArray),
          accessibility: faker.helpers.arrayElement(responseOptionArray),
          openToCitizens: faker.helpers.arrayElement(responseOptionArray),
          type: faker.helpers.arrayElement(initiativeTypeArray),
          address: faker.location.street(),
          postcode: faker.location.zipCode(),
          city: faker.location.city(),
          country: faker.location.country(),
          email: faker.internet.email(),
          webSite: faker.internet.url(),
          responsableId: 1,
          responsableRole: faker.helpers.arrayElement(userRoleArray),
        },
      });
    });

    const initiatives = await Promise.all((initiativesPromises));

    console.log('seeding conpleted successfully');
  } catch (error) {
      console.warn("Error While generating Seed: \n", error);
      process.exit(1);
    } finally {
      await prisma.$disconnect()
    };
}

export default seedDatabase();



