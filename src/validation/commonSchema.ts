import { z } from 'zod';

export const pathIdTypeParamsSchema = z.object({
  id: z.string(),
});

export const pathIdInitiativeParamsSchema = z.object({
  id: z.number(),
});
