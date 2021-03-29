import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { MapContainer, TileLayer } from "react-leaflet";
import Loader from "react-loader-spinner";
import SearchHome from "./../../hooks/SearchHome";

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
      <Loader
        className="spinner"
        type="ThreeDots"
        color="#F5F5F5"
        height={100}
        width={100}
        timeout={1500}
      />

      <MapContainer
        center={defautLocation}
        zoom={11}
        minZoom={6}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <SearchHome />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Link to="/">
          <S.RevertSearch className="no-print" src="/img/reverse.svg" />
        </Link>

        <S.PrintButton
          className="no-print"
          src="/img/print.svg"
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
