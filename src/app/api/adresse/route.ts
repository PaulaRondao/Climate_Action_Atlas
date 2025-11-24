import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  const res = await fetch(
    'https://api-adresse.data.gouv.fr/search/?q=' + query,
  );
  const data = await res.json();

  return NextResponse.json(data);
}
