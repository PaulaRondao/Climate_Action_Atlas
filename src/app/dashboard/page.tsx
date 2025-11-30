import { Navigation } from '@/components/organisms';
import DashboardPage from '@/components/templates/DashboardPage/DashboardPage';
import { authOptions } from '@/lib/next-auth/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <DashboardPage />;
    </>
  );
}
