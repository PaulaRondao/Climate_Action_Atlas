import type { NextRequest } from 'next/server';
import prisma from '../../../lib/prisma';
 
export async function GET(request: NextRequest) {
  const url = request.nextUrl
}