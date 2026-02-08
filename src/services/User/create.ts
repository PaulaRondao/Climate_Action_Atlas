// import { CreateUserDTO } from '@/constants';
// import prisma from '@/lib/prisma';

// type CreateUser = CreateUserDTO;

// export async function createUser(userDTO: CreateUser) {
//   const existingUser = await prisma.userProfile.findUnique({
//     where: { authUserId: userDTO.authUserId },
//   });

//   if (existingUser) {
//     throw new Error('Cet email est déjà utilisé');
//   }

//   const createdUser = await prisma.userProfile.create({
//     data: {
//       ...userDTO,
//     },
//   });

//   return createdUser;
// }
