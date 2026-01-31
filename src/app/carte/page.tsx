import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth/authOptions';
import { Navigation } from '@/components/organisms';
import MapViewClient from '@/components/templates/MapViewTemplate/MapViewClient';

export default async function MapViewPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <MapViewClient position={[46.232193, 2.209667]} />
    </>
  );
}
