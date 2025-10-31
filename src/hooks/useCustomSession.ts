import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const useCustomSession = () => {
  const sessionData = useSession();
  const router = useRouter();

  const { data: session } = sessionData;

  if (session) {
    if (new Date(session.expires).getTime() < Date.now()) {
      router.push('/connexion');
    }

    return sessionData;
  }
};

export default useCustomSession;
