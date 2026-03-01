import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/adresse:
 *   get:
 *     summary: Get an address
 *     tags: [Address]
 *     responses:
 *       201:
 *         description: Success
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  const res = await fetch('https://data.geopf.fr/geocodage/search/?q=' + query);
  const data = await res.json();

  return NextResponse.json(data);
}
