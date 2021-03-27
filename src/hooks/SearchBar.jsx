import { useState, useEffect } from "react";

import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import icon from "./../constants/homeIcon";

import { PrintAddress } from "../components/Map/styles";

const SearchBar = () => {
  const map = useMap();

  let [printInfo, setPrintinfo] = useState("");

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
        let latlng = e.geocode.center;
        L.marker(latlng, { icon })
          .bindPopup(e.geocode.name)
          .openPopup()
          .addTo(map);
        map.panTo(latlng);
        L.circle(latlng, {
          color: "#000",
          fillColor: "#7AEDAD",
          radius: 10000,
        }).addTo(map);
        setPrintinfo(e.geocode.name);
      })
      .addTo(map);
  }, [map]);

  return <PrintAddress className="printInfo">{printInfo}</PrintAddress>;
};
export default SearchBar;
