import React from 'react';
import RegisterTemplate from '@/components/templates/RegisterTemplate/RegisterTemplate';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth/authOptions';
import { Navigation } from '@/components/organisms';

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <RegisterTemplate />;
    </>
  );
}
