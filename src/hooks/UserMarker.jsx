import { useState, useEffect } from "react";

import { useMap } from "react-leaflet";
import L from "leaflet";

import icon from "./../constants/userIcon";

const UserMarker = () => {
  const map = useMap();
  const [currentPosition, setCurrentPosition] = useState([
    48.856614,
    2.3522219,
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      let latlng = currentPosition;
      const marker = L.marker(latlng, { icon })
        .addTo(map)
        .bindPopup("Vous êtes ici.");
      map.panTo(latlng);

      navigator.geolocation.getCurrentPosition(function (position) {
        const pos = [position.coords.latitude, position.coords.longitude];
        setCurrentPosition(pos);
        marker.setLatLng(pos);
        map.panTo(pos);
      });
    } else {
      alert("Problème lors de la géolocalisation.");
    }
  }, [map]);

  return null;
};

export default UserMarker;
