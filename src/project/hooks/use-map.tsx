import {useEffect, useState, useRef, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types/Offers.type';

function useMap (
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Location
):Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false); //храним инфу - была карта отрисаван или нет

  const TILE_LAYER =
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const COPY_RIGHT =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });


      const layer = new TileLayer(TILE_LAYER,{
          attribution: COPY_RIGHT
          })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export { useMap };