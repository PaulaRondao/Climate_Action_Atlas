import React from 'react';
import { Map, NavigationControl } from '@vis.gl/react-maplibre';
// import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapView: React.FC = () => {

  // const mapRef = useRef<maplibregl.Map | null>(null);

  // useEffect(() => {
  //   if (mapRef.current) {
  //     // Créer la carte
  //     const map = mapRef.current;
      
  //     // Ajouter le contrôle de navigation
  //     const navControl = new maplibregl.NavigationControl();
  //     map.addControl(navControl, 'top-left'); // 'top-left' est la position du contrôle

  //     // Assurer que la carte est correctement détruite lors du nettoyage
  //     return () => {
  //       map.removeControl(navControl);
  //     };
  //   }
  // }, []);
  return (
    <Map
      initialViewState={{
        longitude: 2.209667,
        latitude: 46.232193,
        zoom: 3.5,
      }}
      style={{width: "90%", height: " calc(100vh - 77px)"}}
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <NavigationControl />
    </Map>
  );
};

export default MapView;
