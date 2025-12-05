import React from 'react';
import MapViewTemplate from '@/components/templates/MapViewTemplate/MapViewTemplate';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth/authOptions';
import { Navigation } from '@/components/organisms';

export default async function MapViewPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navigation session={session} />
      <MapViewTemplate position={[46.232193, 2.209667]} />
    </>
  );
}
