'use client';

import React from 'react';
import MapViewTemplate from '@/components/templates/MapViewTemplate/MapViewTemplate';

interface MapViewClientProps {
  position: [number, number];
}

export default function MapViewClient({ position }: MapViewClientProps) {
  // Tout ce qui utilise Leaflet ou client-only est ici
  return <MapViewTemplate position={position} />;
}
