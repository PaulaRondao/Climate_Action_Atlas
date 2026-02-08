'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ButtonWithIcon } from './button.styles';
import { authClient, useSession } from '@/lib/auth-client';

export const LoginButton = async () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  if (!session) {
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
        onClick={() =>
          authClient.signIn.email({
            email: '',
            password: '',
            callbackURL: '/connexion',
          })
        }
        aria-current={pathname === '/connexion' ? 'page' : undefined}
      >
        <Image src="/icons/login.svg" alt="" width={26} height={26} />
        Se connecter
      </ButtonWithIcon>
    </>
  );
};
