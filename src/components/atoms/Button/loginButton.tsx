'use client';

import useCustomSession from '@/hooks/useCustomSession';

import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ButtonWithIcon } from './button.styles';

export default function LoginButton() {
  const { data: session, status } = useCustomSession();
  const pathname = usePathname();

  if (session && status === 'authenticated') {
    return (
      <>
        <ButtonWithIcon
          onClick={() => signOut({ callbackUrl: '/' })}
          aria-current={pathname === '/déconnexion' ? 'page' : undefined}
        >
          <Image src="/icons/login.svg" alt="" width={26} height={26} />
          Se déconnecter
        </ButtonWithIcon>
      </>
    );
  }
  return (
    <>
      <ButtonWithIcon
        onClick={() => signIn()}
        aria-current={pathname === '/connexion' ? 'page' : undefined}
      >
        <Image src="/icons/login.svg" alt="" width={26} height={26} />
        Se connecter
      </ButtonWithIcon>
    </>
  );
}
