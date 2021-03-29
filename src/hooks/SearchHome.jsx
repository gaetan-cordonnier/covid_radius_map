import { useState, useEffect } from "react";

import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

import { PrintAddress } from "../components/Map1/styles";

const layerGroup = L.layerGroup();
const homeIcon = L.icon({
  iconUrl: "/img/house.png",
  iconRetinaUrl: "/img/house.png",
  iconSize: [42, 42],
  iconAnchor: [21, 42],
  popupAnchor: [0, -42],});

const positionIcon = L.icon({
  iconUrl: "/img/marker.png",
  iconRetinaUrl: "/img/marker.png",
  iconSize: [42, 42],
  iconAnchor: [21, 42],
  popupAnchor: [0, -42],});

const SearchHome = () => {
  const map = useMap();

  let [printInfo, setPrintInfo] = useState("");

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim({
      geocodingQueryParams: {
        limit: 3,
        addressdetails: 1,
        namedetails: 1,
        countrycodes: "fr",
      },
    });

    L.Control.geocoder({
      query: "",
      placeholder: "Ex: 2 Rue Haddock Villeneuve-d'Ascq",
      defaultMarkGeocode: false,
      geocoder,
    })
      .on("markgeocode", function (e) {
        layerGroup.clearLayers();
        let latlng = e.geocode.center;
        L.marker(latlng, {icon: homeIcon})
          .bindPopup(e.geocode.name)
          .openPopup()
          .addTo(layerGroup);
          L.circle(latlng, {
            color: "#000",
            fillColor: "#7AEDAD",
            radius: 10000,
          }).addTo(map);
        map.panTo(latlng);
        setPrintInfo(e.geocode.name);
        map.addLayer(layerGroup);
      })
      .addTo(map);
  }, [map]);

  useEffect(() => {
    const marker = L.marker;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latlng = [position.coords.latitude, position.coords.longitude];
        marker(latlng, {icon: positionIcon})
          .setLatLng(latlng)
          .bindPopup("Vous êtes ici.")
          .addTo(map);
        map.panTo(latlng);
      });
    } else if (!navigator.geolocation) {
      alert("Problème lors de la géolocalisation.");
    }
  }, [map]);

  return <PrintAddress className="printInfo">{printInfo}</PrintAddress>;
};
export default SearchHome;