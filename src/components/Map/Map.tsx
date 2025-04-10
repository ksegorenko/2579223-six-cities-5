import { OfferPreview } from '../../types/preview.type';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from './hooks/useMap';
import { Icon, layerGroup, Marker } from 'leaflet';
import { Location } from '../../types/location.type';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  block: string;
  location: Location;
  offers: OfferPreview[];
  selectedOfferId: OfferPreview[ 'id' ] | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map({ block, location, offers, selectedOfferId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          offer.id === selectedOfferId
            ? activeCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId]);

  return (
    <section className={`${block}__map map`}>
      <div style={{height: '100%'}} ref={mapRef} />
    </section>
  );
}

export default Map;
