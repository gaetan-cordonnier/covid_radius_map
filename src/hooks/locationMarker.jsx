import { useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

import icon from "./../constants/iconPosition";

export default function LocationMarker() {
  const map = useMap();
  let [currentPosition, setCurrentPosition] = useState([48.856614, 2.3522219]);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
    });

    let latlng = currentPosition;
    L.marker(latlng, { icon }).addTo(map).bindPopup("Vous êtes ici");
    map.panTo(latlng);
  }

  return null;
}

// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (pos) {
//       map.locate()
//       .on("Postion non trouvée", function (e) {
//           setPosition= pos.coords;

//           map.flyTo(e.latlng, map.getZoom());
//         });

//   })

//     let geocoder = L.Control.Geocoder.nominatim({
//       geocodingQueryParams: {
//         limit: 2,
//         addressdetails: 1,
//         namedetails: 1,
//         countrycodes: "fr",
//       },
//     });
//     if (typeof URLSearchParams !== "undefined" && location.search) {
//       let params = new URLSearchParams(location.search);

//       let geocoderString = params.get("geocoder");
//       if (geocoderString && L.Control.Geocoder[geocoderString]) {
//         geocoder = L.Control.Geocoder[geocoderString]();
//       } else if (geocoderString) {
//         console.warn("Format non supporté", geocoderString);
//       }
//     }

//     L.Control.geocoder({
//       query: "",
//       placeholder: "Ex: 2 Rue Haddock Villeneuve-d'Ascq",
//       defaultMarkGeocode: false,
//       geocoder,
//     })
//       .on(
//         "markgeocode",
//         function (e) {
//           let latlng = e.geocode.center;
//           L.marker(latlng, { icon })
//             .addTo(map)
//             .bindPopup(e.geocode.name)
//             .openPopup();
//           map.fitBounds(e.geocode.bbox);
//           L.circle(latlng, {
//             color: "#000",
//             fillColor: "#7AEDAD",
//             radius: 10000,
//           }).addTo(map);
//         },
//         []
//       )
//       .addTo(map);
//   });

//   return null;
// }

// export default function LocationMarker() {

//     const [position, setPosition] = useState([0, 0]);
//     const map = useMap();

//   return position === null ? null : (
//     <Marker position={position} icon={}>
//       <Popup>Vous êtes ici</Popup>
//     </Marker>
//   );
