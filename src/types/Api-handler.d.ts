import { ZodSchema } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

export interface Params {
  [key: string]: any | any[];
}

export type PathParams = Record<string, string>;

export interface Handler<TBody = any, TParams = Params> {
  fn: (
    request: NextRequest & { user?: { id: string } },
    body: TBody,
    params: TParams,
  ) => Promise<NextResponse>;
  bodySchema?: ZodSchema<TBody>;
  querySchema?: ZodSchema<TParams>;
  paramsSchema?: ZodSchema<TParams>;
  authorizeRoles?: userRole[];
}
