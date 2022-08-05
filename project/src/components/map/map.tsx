import {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap/useMap';
import 'leaflet/dist/leaflet.css';
import { City, Offer, Offers } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';


type MapProps = {
  city: City;
  offers: Offers;
  currentOffer: Offer | undefined;
  mapMods: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

function Map({city, offers, currentOffer, mapMods}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const navigate = useNavigate();

  useEffect(() => {
    if (map) {
      const markers: Marker[] = [];

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        }, {
          icon: defaultCustomIcon,
        });
        marker
          .setIcon(
            offer === currentOffer ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);

        markers.push(marker);

        marker.on('click', () => navigate (`/offer/${offer.id}`));
      });

      return () => markers.forEach((marker) => map.removeLayer(marker));
    }


  }, [map, offers, currentOffer]);

  if (mapMods === 'big') {
    return <div style={{height: '579px'}} ref={mapRef}></div>;
  } else {
    return <div style={{height: '100%'}} ref={mapRef}></div>;
  }
}

export default Map;
