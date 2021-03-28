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
          .bindPopup("Vous êtes ici.")
          .addTo(map);
        map.panTo(latlng);
        L.circle(latlng, {
          color: "#000",
          fillColor: "#7AEDAD",
          radius: 10000,
        }).addTo(map);
      });
    } else {
      alert("Problème lors de la géolocalisation.");
    }
  }, [map]);

  return null;
};

export default UserMarker;
