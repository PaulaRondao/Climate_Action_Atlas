'use client';

import useCustomSession from '@/hooks/useCustomSession';
import { Button } from '@/styles/components';
import { signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function LoginButton() {
  const { data: session, status } = useCustomSession();
  const pathname = usePathname();

  if (status === 'loading') {
    return <p>Chargement...</p>;
  }
  if (session && status === 'authenticated') {
    return (
      <>
        <Button
          onClick={() => signOut({ callbackUrl: '/' })}
          aria-current={pathname === '/déconnexion' ? 'page' : undefined}
        >
          Déconnexion
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        onClick={() => signIn()}
        aria-current={pathname === '/connexion' ? 'page' : undefined}
      >
        Connexion
      </Button>
    </>
  );
}
