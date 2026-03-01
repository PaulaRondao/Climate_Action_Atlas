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
import { Paragraphe, Title } from './MapView.style';
import { formattedDate } from '@/helpers/formattedDate';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina.src,
  iconUrl: iconUrl.src,
  shadowUrl: shadowUrl.src,
});

L.Icon.Default.imagePath = '.';

interface MapViewProps {
  position: LatLngExpression | LatLngTuple;
  zoom?: number;
  filteredInitiativeType?: InitiativesLabel;
}

const MapView = ({
  position,
  zoom = 6,
  filteredInitiativeType,
}: MapViewProps) => {
  const { getInitiatives, loading, error } = useInitiatives();
  const [initiatives, setInitiatives] = useState<InitiativeWithRelations[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allInitiatives = await getInitiatives();
      if (!allInitiatives) return;

      const mappedType = filteredInitiativeType
        ? LabelToInitiativeType[filteredInitiativeType]
        : undefined;
      const initiativeList = mappedType
        ? allInitiatives.filter((initiative) =>
            initiative.initiativeType?.includes(mappedType),
          )
        : allInitiatives;

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
                <header role="banner">
                  <Title>{initiative.name}</Title>
                </header>
                <hr></hr>
                <main role="main">
                  <Paragraphe>{initiative.description}</Paragraphe>
                  <hr></hr>
                  <Paragraphe>
                    <span>Adresse : </span>
                    {`${initiative.initiativeLocation?.postcode} ${initiative.initiativeLocation?.street}, ${initiative.initiativeLocation?.city} `}
                  </Paragraphe>
                  {initiative.initiativeType.map((type) => (
                    <Paragraphe key={type}>
                      <span>Type d'impact : </span>
                      {InitiativeTypeToLabel[type]}
                    </Paragraphe>
                  ))}
                  <hr></hr>
                  {initiative.narrative && (
                    <Paragraphe>{initiative.narrative}</Paragraphe>
                  )}
                  <hr></hr>
                  <ul>
                    <li>
                      {initiative.email && (
                        <Paragraphe>
                          <span>Email de contact : </span>
                          {initiative.email}
                        </Paragraphe>
                      )}
                    </li>
                    <li>
                      {initiative.webSite && (
                        <Paragraphe>
                          <span>Site web : </span>
                          {initiative.webSite}
                        </Paragraphe>
                      )}
                    </li>
                  </ul>
                </main>
                <hr></hr>
                <footer role="contentinfo">
                  <span>Mise à jour le {formattedDate(initiative)}</span>
                </footer>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default MapView;
