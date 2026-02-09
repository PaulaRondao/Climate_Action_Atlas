'use client';

import React from 'react';
import MapViewTemplate from '@/components/templates/MapViewTemplate/MapViewTemplate';
import { Navigation } from '@/components/organisms';
import { useSession } from '@/lib/auth-client';

interface MapViewClientProps {
  position: [number, number];
}

export default function MapViewClient({ position }: MapViewClientProps) {
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
      <Navigation session={isLoggedIn} />
      <MapViewTemplate position={position} />
    </>
  );
}
