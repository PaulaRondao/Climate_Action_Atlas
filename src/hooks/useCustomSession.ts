import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useCustomSession = () => {
  const sessionData = authClient.useSession();
  const router = useRouter();

  const { data: session, isPending } = sessionData;

  useEffect(() => {
    if (isPending || !session?.user) return;

    if (session) {
      if (new Date(session.session.expiresAt).getTime() < Date.now()) {
        router.push('/connexion');
      }
    }
  }, [session, isPending, router]);

  return sessionData;
};

export default useCustomSession;
