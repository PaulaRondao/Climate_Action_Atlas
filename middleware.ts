import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

export function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  const authRoutes = ['/connexion', '/inscription'];

  // Déjà connecté → pas accès aux pages auth
  if (sessionCookie && authRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/profil', request.url));
  }

  // Pas connecté → accès refusé aux pages protégées
  if (
    !sessionCookie &&
    (pathname.startsWith('/profil') ||
      pathname.startsWith('/formulaire-initiative'))
  ) {
    return NextResponse.redirect(new URL('/connexion', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profil/:path*', '/connexion', '/inscription'],
};
