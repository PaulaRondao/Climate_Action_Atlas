import { Navigation } from '@/components/organisms';
import SignInTemplate from '@/components/templates/SignInTemplate/SignInTemplate';
import { authOptions } from '@/lib/next-auth/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session?.user?.id) {
    redirect('/dashboard');
  }
  return (
    <>
      <Navigation session={session} />
      <SignInTemplate />
    </>
  );
}
