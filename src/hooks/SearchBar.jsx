import { useState, useEffect } from "react";

import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import icon from "./../constants/homeIcon";

import { PrintAddress } from "../components/Map/styles";

const layerGroup = L.layerGroup();

const SearchBar = () => {
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
        L.marker(latlng, { icon })
          .bindPopup(e.geocode.name)
          .openPopup()
          .addTo(layerGroup);

        map.panTo(latlng);

        L.circle(latlng, {
          color: "#000",
          fillColor: "#7AEDAD",
          radius: 10000,
        }).addTo(layerGroup);

        setPrintInfo(e.geocode.name);

        map.addLayer(layerGroup);
      })
      .addTo(map);
  }, [map]);

  return <PrintAddress className="printInfo">{printInfo}</PrintAddress>;
};
export default SearchBar;
