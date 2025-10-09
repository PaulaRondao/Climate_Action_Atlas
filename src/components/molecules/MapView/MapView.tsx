'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import L from 'leaflet';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina.src,
  iconUrl: iconUrl.src,
  shadowUrl: shadowUrl.src,
});

L.Icon.Default.imagePath = '.';

interface MapViewProps {
  position: LatLngExpression | LatLngTuple;
  zoom?: number;
}

export default function MapView({ position, zoom = 10 }: MapViewProps) {
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
        <Marker position={position} draggable={false}>
          <Popup>Hey ! I study here</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
