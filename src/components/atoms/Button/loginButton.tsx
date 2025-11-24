'use client';

import useCustomSession from '@/hooks/useCustomSession';
import { signIn, signOut } from 'next-auth/react';

export default function Component() {
  const { data: session, status } = useCustomSession();

  if (status === 'loading') {
    return <p>Chargement...</p>;
  }
  if (session) {
    return (
      <>
        Connecté en tant que {session.user?.email} <br />
        <button onClick={() => signOut({ callbackUrl: '/' })}>
          Déconnexion
        </button>
      </>
    );
  }
  return (
    <>
      Non connecté <br />
      <button onClick={() => signIn()}>Connexion</button>
    </>
  );
}
