'use client';

import { CSSProperties, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'maplibre-theme/icons.default.css';
import 'maplibre-theme/modern.css';
import 'maplibre-react-components/style.css';
import {
  RMap,
  RMarker,
  RNavigationControl,
  RGradientMarker,
  RLayer,
  RSource,
} from 'maplibre-react-components';
import { MapLayerMouseEvent } from 'maplibre-gl';
import { mountainIconFactory } from './util';
import { townData } from './util';
import { LayerSwitcherControl, type StyleID } from './LayerSwitcherControl';

const mapCSS: CSSProperties = {
  minHeight: 500,
};

const townFillPaint = {
  'fill-outline-color': 'rgba(0,0,0,0.1)',
  'fill-color': 'rgba(0,0,0,0.3)',
};

const mountain: [number, number] = [6.4546, 46.1067];

function MapView() {
  const [markerPosition, setMarkerPosition] = useState<
    null | [number, number]
  >();
  const [style, setStyle] = useState<StyleID>('OSM Bright');

  const styles: Partial<Record<StyleID, string>> = {
    'OSM Bright':
      'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json',
  };

  function handleClick(e: MapLayerMouseEvent) {
    setMarkerPosition(e.lngLat.toArray());
  }

  return (
    <RMap
      mapStyle={styles[style]}
      style={mapCSS}
      minZoom={6}
      onClick={handleClick}
      initialCenter={mountain}
      initialZoom={8}
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
          <RSource key="town" id="town" type="geojson" data={townData} />
          <RLayer
            key="town-fill"
            id="town-fill"
            source="town"
            type="fill"
            paint={townFillPaint}
          />
        </>
      )}
    </RMap>
  );
}

export default MapView;
