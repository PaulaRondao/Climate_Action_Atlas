import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useCustomSession = () => {
  const sessionData = useSession();
  const router = useRouter();

  const { data: session, status } = sessionData;

  useEffect(() => {
    if (status === 'loading' || !session?.user) return;

    if (session) {
      if (new Date(session.expires).getTime() < Date.now()) {
        router.push('/connexion');
      }
    }
  }, [session, status, router]);

  return sessionData;
};

export default useCustomSession;
