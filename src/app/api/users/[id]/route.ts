import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from '@/types/enums/httpStatusCode';
import { BackendApiResponseType } from '@/types/enums/backendApiResponse';
import { apiHandler } from '@/services/api/api-handler';
import { getUser } from '@/services/User/getUser';
import { pathIdTypeParamsSchema } from '@/validation/commonSchema';
import { updateUser } from '@/services/User/update';
import { deleteUser } from '@/services/User/delete';
import { updateUserSchema, UpdateUserBody } from '@/validation/userSchema';
import { UserParams, UserProfil } from '@/types/User';
import { UserRole } from '@/types/enums/userRole';

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Non autorisé
 */

const get = async (request: NextRequest, { id }: { id: string }) => {
  const user = (request as any).user;

  if (user.id !== id) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Utilisateur non trouvé' },
      { status: HttpStatusCode.HTTP_BAD_REQUEST },
    );
  }

  const result = await getUser(id);

  if (!result) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Utilisateur non trouvé' },
      { status: HttpStatusCode.HTTP_BAD_REQUEST },
    );
  }

  return NextResponse.json(
    { type: BackendApiResponseType.SUCCESS, data: result },
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
 * /api/users/{userId}:
 *   patch:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour
 *       400:
 *         description: Non autorisé
 */
const update = async (
  request: NextRequest,
  body: UpdateUserBody,
  params: UserParams,
) => {
  const user = (request as any).user;

  if (user.id !== params) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Accès interdit' },
      { status: HttpStatusCode.HTTP_FORBIDDEN },
    );
  }

  const result = await updateUser(params.id, body);

  return NextResponse.json(
    {
      type: BackendApiResponseType.SUCCESS,
      message: 'Utilisateur mis à jour',
      data: result,
    },
    { status: HttpStatusCode.HTTP_OK },
  );
};

export const PATCH = apiHandler({
  fn: update,
  bodySchema: updateUserSchema,
  paramsSchema: pathIdTypeParamsSchema,
  authorizeRoles: [UserRole.CONTRIBUTOR],
});

/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: Utilisateur supprimé
 *       400:
 *         description: Non autorisé
 */
const deletedUser = async (
  request: NextRequest,
  body: UserProfil,
  params: UserParams & { id: string },
) => {
  const user = (request as any).user;

  if (user.id !== params.id) {
    return NextResponse.json(
      { type: BackendApiResponseType.ERROR, error: 'Accès interdit' },
      { status: HttpStatusCode.HTTP_FORBIDDEN },
    );
  }

  await deleteUser(params.id);

  return NextResponse.json(
    {
      type: BackendApiResponseType.SUCCESS,
      message: 'Utilisateur supprimé',
    },
    { status: HttpStatusCode.HTTP_OK },
  );
};

export const DELETE = apiHandler({
  fn: deletedUser,
  paramsSchema: pathIdTypeParamsSchema,
  authorizeRoles: [UserRole.CONTRIBUTOR],
});
