// import prisma from '@/lib/prisma';
// import { InitiativeType, Prisma } from '@prisma/client';

// export interface GetInitiativesOptions {
//   page?: number;
//   limit?: number;
//   search?: string;
//   type?: InitiativeType | '';
// }

// export const getAllInitiatives = async ({
//   search,
//   type,
// }: Prisma.InitiativeWhereInput) => {
//   const where = {
//     AND: [
//       search
//         ? {
//             OR: [
//               { name: { contains: search } },
//               { associationName: { contains: search } },
//               { description: { contains: search } },
//             ],
//           }
//         : {},
//       type ? { initiativeType: { has: type as InitiativeType } } : {},
//     ],
//   };

//   const initiatives = await prisma.initiative.findMany({
//     where,
//     include: {
//       contributor: true,
//       initiativeLocation: true,
//     },
//   });

//   return initiatives;
// };
