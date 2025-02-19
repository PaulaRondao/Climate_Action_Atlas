import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//GET request: Récupérer une initiative spécifique par ID

export async function Test(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const initiativeSelect = await prisma.initiative.findUnique({
    where: { id: Number(id) },
  });

  if (!initiativeSelect) {
    return NextResponse.json(
      { message: 'Initiative not found' },
      { status: 404 },
    );
  }
  console.log(initiativeSelect);
  return NextResponse.json(initiativeSelect);
}

// type MyPostPayload = prisma.PostGetPayload<{ select: typeof initiativeSelect }>

// PUT request: Mettre à jour une initiative spécifique par ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const data = await req.json();
  const updatedInitiative = await prisma.initiative.update({
    where: { id: Number(id) },
    data,
  });
  return NextResponse.json(updatedInitiative);
}

// DELETE request: Supprimer une initiative spécifique par ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await prisma.initiative.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Initiative supprimée avec succès' });
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ApiResponse>
// ) {

//   const { id } = req.query;
//   try {
//       const data = await prisma.project_cee.findUnique({where: { id: Number(id)} });
//       if (!data) {
//           res.status(404).json({ message: "Data not found" });
//           return;
//       }

//       const addressBeneficiaire = await prisma.clients.findUnique({
//           where: {
//               id : data?.clientId  || 0
//       }})
//       const fluxIdsArray = Array.isArray(data?.fluxIds) ? data?.fluxIds as number[] : [];
//       const fluxId = fluxIdsArray.length > 0 ? fluxIdsArray[0] : null;

//       let infoFlux = null;
//       if (fluxId !== null) {
//           infoFlux = await prisma.cee_flux.findUnique({
//               where: { id: fluxId }
//           });
//       }

//       const formattedData: ResponseData  = {
//           id: data?.id ?? 0,
//           status: data?.status ?? 0,
//           clientId: data?.clientId ?? 0,
//           contactFirstName: data?.contactFirstName || '',
//           contactLastName: data?.contactLastName || '',
//           contactEmail: data?.contactEmail || '',
//           contactPhone: data?.contactPhone || '',
//           declarationDate: data?.declarationDate ? new Date(data?.declarationDate).toISOString().split('T')[0] : '',
//           fluxIds: fluxIdsArray,
//           beneficiaryStreet:addressBeneficiaire?.address || '',
//           beneficiaryCity:addressBeneficiaire?.city || '',
//           beneficiaryPostalCode: addressBeneficiaire?.zipcode || '',
//           workingStreet: data?.contactAddress || '',
//           workingCity:data?.contactCity || '',
//           workingPostalCode: data?.contactZipcode || '',
//           startDate: infoFlux?.startDate ? new Date(infoFlux.startDate).toISOString().split('T')[0] : '',
//           endDate: infoFlux?.endDate ? new Date(infoFlux.endDate).toISOString().split('T')[0] : ''

//       };
//       // console.log(formattedData);
//       res.status(200).json( formattedData );
//   } catch (error) {
//       console.error('Error fetching project data:', error);
//       res.status(500).json({ message: 'Internal server error' });
//   }finally {
//       await prisma.$disconnect();
//   }
