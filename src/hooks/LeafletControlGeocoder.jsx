import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import { PrintPosition } from "./../components/Map/styles";

import icon from "./../constants/iconHouse";

export default function LeafletControlGeocoder() {
  const [adressText, setAdressText] = useState("");
  const map = useMap();
  const location = [48.856614, 2.3522219];
  // {serviceUrl: '//35.180.152.230/nominatim/'},

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim({
      geocodingQueryParams: {
        limit: 3,
        addressdetails: 1,
        namedetails: 1,
        countrycodes: "fr",
      },
    });
    if (typeof URLSearchParams !== "undefined" && location.search) {
      let params = new URLSearchParams(location.search);

      let geocoderString = params.get("geocoder");
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Format non supporté", geocoderString);
      }
    }

    L.Control.geocoder({
      query: "",
      placeholder: "Ex: 2 Rue Haddock Villeneuve-d'Ascq",
      defaultMarkGeocode: false,
      geocoder,
    })
      .on(
        "markgeocode",
        function (e) {
          let latlng = e.geocode.center;
          L.marker(latlng, { icon })
            .addTo(map)
            .bindPopup(e.geocode.name)
            .openPopup();
          map.panTo(latlng);
          L.circle(latlng, {
            color: "#000",
            fillColor: "#7AEDAD",
            radius: 10000,
          }).addTo(map);
          setAdressText(e.geocode.name);
        },
        []
      )
      .addTo(map);
  });

  return <PrintPosition>{adressText}</PrintPosition>;
}
