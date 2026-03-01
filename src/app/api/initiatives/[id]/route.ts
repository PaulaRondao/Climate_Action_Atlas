import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import { UpdateInitiativeDTO } from '@/constants';
import {
  apiHandler,
  checkContributorValidity,
} from '@/services/api/api-handler';
import { getOneInitiative } from '@/services/Initiative/getOneInitiative';
import { pathIdTypeParamsSchema } from '@/validation/commonSchema';
import {
  InitiativeParams,
  UpdateInitiativeBody,
  updateInitiativeSchema,
} from '@/validation/initiativeSchema';
import { UserRole } from '@/types/enums/userRole';

/**
 * @swagger
 * /api/initiatives/{initiativeId}:
 *   get:
 *     summary: Get an initiative by ID
 *     tags: [Initiatives]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Non autorisé
 */
const get = async (
  request: NextRequest,
  body: undefined,
  params: InitiativeParams & { id: string },
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = (request as any).user;

  const initiativeId = parseInt(params.id, 10);

  if (isNaN(initiativeId)) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Id invalide' },
      { status: HttpStatusCode.HTTP_BAD_REQUEST },
    );
  }

  await checkContributorValidity(user.id, initiativeId);

  const initiative = await getOneInitiative(initiativeId);

  if (!initiative) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Initiative non trouvée' },
      { status: HttpStatusCode.HTTP_NOT_FOUND },
    );
  }

  return NextResponse.json(
    { type: BackendApiResponseType.SUCCESS, data: initiative },
    { status: HttpStatusCode.HTTP_OK },
  );
};

export const GET = apiHandler({
  fn: get,
  paramsSchema: pathIdTypeParamsSchema,
  authorizeRoles: [UserRole.CONTRIBUTOR],
});

/**
 * @swagger
 * /api/initiatives/{initiativeId}:
 *   delete:
 *     summary: Delete an initiative by ID
 *     tags: [Initiatives]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Non autorisé
 */
const deleted = async (
  request: NextRequest,
  body: undefined,
  params: InitiativeParams & { id: string },
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = (request as any).user;

  const initiativeId = parseInt(params.id, 10);
  if (isNaN(initiativeId)) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Id invalide' },
      { status: HttpStatusCode.HTTP_BAD_REQUEST },
    );
  }

  await checkContributorValidity(user.id, initiativeId);

  await prisma.initiative.delete({
    where: { id: initiativeId },
  });

  return NextResponse.json(
    { type: BackendApiResponseType.SUCCESS, message: 'Initiative supprimée' },
    { status: HttpStatusCode.HTTP_OK },
  );
};

export const DELETE = apiHandler({
  fn: deleted,
  paramsSchema: pathIdTypeParamsSchema,
  authorizeRoles: [UserRole.CONTRIBUTOR],
});

/**
 * @swagger
 * /api/initiatives/{initiativeId}:
 *   patch:
 *     summary: Update an initiative by ID
 *     tags: [Initiatives]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Non autorisé
 */
const patch = async (
  request: NextRequest,
  body: UpdateInitiativeBody,
  params: InitiativeParams & { id: string },
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = (request as any).user;

  const initiativeId = parseInt(params.id, 10);
  if (isNaN(initiativeId)) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Id invalide' },
      { status: HttpStatusCode.HTTP_BAD_REQUEST },
    );
  }

  await checkContributorValidity(user.id, initiativeId);

  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json(
      {
        type: BackendApiResponseType.ERROR,
        error: 'Aucune donnée à mettre à jour',
      },
      { status: HttpStatusCode.HTTP_BAD_REQUEST },
    );
  }

  const updated = await prisma.initiative.update({
    where: { id: initiativeId },
    data: { ...body, updatedAt: new Date() } as UpdateInitiativeDTO,
  });

  return NextResponse.json(
    {
      type: BackendApiResponseType.SUCCESS,
      message: 'Initiative mise à jour',
      data: updated,
    },
    { status: HttpStatusCode.HTTP_OK },
  );
};

export const PATCH = apiHandler({
  fn: patch,
  bodySchema: updateInitiativeSchema,
  paramsSchema: pathIdTypeParamsSchema,
  authorizeRoles: [UserRole.CONTRIBUTOR],
});
