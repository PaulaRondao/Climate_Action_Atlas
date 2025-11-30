import React from 'react';
import HomePage from '@/components/templates/HomePage/HomePage';
import { Navigation } from '@/components/organisms';
import { authOptions } from '@/lib/next-auth/authOptions';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <HomePage />;
    </>
  );
}
