import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import SearchBar from "./../../hooks/SearchBar";
import UserMarker from "./../../hooks/UserMarker";

import "leaflet/dist/leaflet.css";
import * as S from "./styles.js";

export default function Map() {
  const defautLocation = [48.856614, 2.3522219];
  const [isPrinting, setIsPrinting] = useState(false);
  const onClick = () => setIsPrinting(true);

  useEffect(() => {
    if (isPrinting) {
      window.print();
      setIsPrinting(false);
    }
  }, [isPrinting]);

  return (
    <S.DivMain>
      <MapContainer
        center={defautLocation}
        zoom={11}
        minZoom={6}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <UserMarker />
        <SearchBar />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <S.PrintButton
          className="no-print"
          src="/img/print.png"
          onClick={onClick}
        />
        <S.LogoFTM>
          <a
            href="https://www.followthemarket.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/logo-black.svg" alt="logo" />
          </a>
        </S.LogoFTM>
      </MapContainer>
    </S.DivMain>
  );
}
