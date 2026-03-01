import { auth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Create an user
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Success
 */
export const { POST, GET } = toNextJsHandler(auth);
