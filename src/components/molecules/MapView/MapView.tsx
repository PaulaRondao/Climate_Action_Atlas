'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import L from 'leaflet';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';
import {
  InitiativesLabel,
  InitiativeTypeToLabel,
  LabelToInitiativeType,
} from '@/constants';
import { useInitiatives } from '@/hooks/useInitiatives';
import { InitiativeWithRelations } from '@/types/initiatives';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina.src,
  iconUrl: iconUrl.src,
  shadowUrl: shadowUrl.src,
});

L.Icon.Default.imagePath = '.';

interface MapViewProps {
  position: LatLngExpression | LatLngTuple;
  zoom?: number;
  filteredInitiativeType: InitiativesLabel | null;
}

export default function MapView({
  position,
  zoom = 6,
  filteredInitiativeType,
}: MapViewProps) {
  const { getInitiatives, loading, error } = useInitiatives();
  const [initiatives, setInitiatives] = useState<InitiativeWithRelations[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInitiatives(1, 100);
      if (!response) return;

      let initiativeList = response.initiatives;

      if (filteredInitiativeType) {
        const mappedType = LabelToInitiativeType[filteredInitiativeType];
        initiativeList = initiativeList.filter((initiative) =>
          initiative.initiativeType?.includes(mappedType),
        );
      }

      setInitiatives(initiativeList);
    };

    fetchData();
  }, [getInitiatives, filteredInitiativeType]);

  if (loading) return <p>Chargement des initiatives...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {initiatives.map((initiative) => {
          const lat = initiative.initiativeLocation?.latitude;
          const lon = initiative.initiativeLocation?.longitude;

          if (!lat || !lon) return null;

          return (
            <Marker key={initiative.id} position={[lat, lon]}>
              <Popup>
                <strong>{initiative.name}</strong>
                <br />
                {initiative.description || 'Pas de description'}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
