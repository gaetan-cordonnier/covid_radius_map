import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./../../hooks/locationMarker";
import "leaflet/dist/leaflet.css";
import { Container, LogoFTM, PrintButton } from "./styles.js";
import LeafletControlGeocoder from "./../../hooks/LeafletControlGeocoder";

export default function Map() {
  const defautLocation = [48.856614, 2.3522219];
  function printPage() {
    window.print();
  }

  return (
    <Container>
      <MapContainer
        center={defautLocation}
        zoom={11}
        minZoom={6}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <PrintButton src="/img/print.png" onClick={printPage}></PrintButton>
        <LeafletControlGeocoder>
          {/* <PrintPosition>Hello Wold</PrintPosition> */}
        </LeafletControlGeocoder>
        <LogoFTM>
          <a
            href="https://www.followthemarket.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/logo-black.svg" alt="logo" />
          </a>
        </LogoFTM>
      </MapContainer>
    </Container>
  );
}
