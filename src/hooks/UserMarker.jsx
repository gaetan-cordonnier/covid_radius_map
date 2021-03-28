import { useEffect } from "react";

import { useMap } from "react-leaflet";
import L from "leaflet";

import icon from "./../constants/userIcon";

const UserMarker = () => {
  const map = useMap();

  useEffect(() => {
    const marker = L.marker;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latlng = [position.coords.latitude, position.coords.longitude];
        marker(latlng, { icon })
          .setLatLng(latlng)
          .addTo(map)
          .bindPopup("Vous êtes ici.");
        map.panTo(latlng);
      });
    } else {
      alert("Problème lors de la géolocalisation.");
    }
  }, [map]);

  return null;
};

export default UserMarker;
