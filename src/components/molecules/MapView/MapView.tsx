'use client';

import * as React from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'maplibre-theme/icons.default.css';
import 'maplibre-theme/modern.css';
import 'maplibre-react-components/style.css';
import {
  RMap,
  RMarker,
  RNavigationControl,
  RGradientMarker,
} from 'maplibre-react-components';
import { MapLayerMouseEvent } from 'maplibre-gl';
import { useState } from 'react';
import { mountainIconFactory } from './util';

const mountain: [number, number] = [6.4546, 46.1067];

function MapView() {
  const [markerPosition, setMarkerPosition] = useState<
    null | [number, number]
  >();
  function handleClick(e: MapLayerMouseEvent) {
    setMarkerPosition(e.lngLat.toArray());
  }
  return (
    <RMap
      style={{ width: '100%', height: '500px' }}
      minZoom={6}
      onClick={handleClick}
      initialCenter={mountain}
      initialZoom={8}
      mapStyle="https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json"
    >
      <RNavigationControl position="top-right" visualizePitch={true} />
      <RGradientMarker
        longitude={mountain[0]}
        latitude={mountain[1]}
        icon={mountainIconFactory}
      />
      {/* <RMarker longitude={mountain[0]} latitude={mountain[1]} /> */}
      {markerPosition && (
        <>
          {/* <RMarker longitude={markerPosition[0]} latitude={markerPosition[1]} /> */}
          <RGradientMarker
            icon="fe-star"
            color="#285daa"
            longitude={markerPosition[0]}
            latitude={markerPosition[1]}
          />
        </>
      )}
    </RMap>
  );
}

export default MapView;
