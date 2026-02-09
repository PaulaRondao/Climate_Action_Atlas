'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ButtonWithIcon } from './button.styles';
import { authClient, useSession } from '@/lib/auth-client';

export default function LoginButton() {
  const { data: session } = useSession();

  const router = useRouter();
  const pathname = usePathname();

  if (session) {
    return (
      <>
        <ButtonWithIcon
          onClick={() =>
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push('/');
                },
              },
            })
          }
          aria-current={pathname === '/déconnexion' ? 'page' : undefined}
        >
          <Image src="/icons/login.svg" alt="" width={26} height={26} />
          se déconnecter
        </ButtonWithIcon>
      </>
    );
  }
  return (
    <>
      <ButtonWithIcon
        onClick={() => router.push('/connexion')}
        aria-current={pathname === '/connexion' ? 'page' : undefined}
      >
        <Image src="/icons/login.svg" alt="" width={26} height={26} />
        Se connecter
      </ButtonWithIcon>
    </>
  );
}
