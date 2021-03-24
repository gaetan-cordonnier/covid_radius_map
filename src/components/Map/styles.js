import styled from "styled-components";
import media from "styled-media-query";

export const PrintPosition = styled.p`
  z-index: 3000;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 25px;
  margin-bottom: 50px;
  font-size: 12px;
  background: #fff;
  padding: 5px;
  color: #000;
`;

export const LogoFTM = styled.div`
  z-index: 2000;
  width: 170px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 10px;
  margin-bottom: 15px;
  opacity: 60%;
`;

export const GeolocButton = styled.button`
  z-index: 3000;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 60px;
`;

export const PrintButton = styled.img`
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 25px;
  margin-right: 25px;
  width: 40px;
  height: 40px;
  border-radius: 25px:

  ${media.lessThan("large")`
  margin-bottom: 20px;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 20px:
  `}

  ${media.lessThan("medium")`
  margin-bottom: 20px;
  margin-right: 20px;
  width: 25px;
  height: 25px;
  border-radius: 20px:
  `}

  ${media.lessThan("small")`
  margin-bottom: 20px;
  margin-right: 20px;
  width: 25px;
  height: 25px;
  border-radius: 20px:
  `}
`;

export const Container = styled.div`

.leaflet-zoom-box {
  display: none;
}

.leaflet-container {
    width: 98vw;
    height: 82.5vh;
    margin-top 1vh;
  }

.leaflet-popup-tip, .leaflet-popup-content-wrapper {
  font-family: 'Montserrat', 'Roboto', sans-serif;
  text-align: center;
  background-color: #fff;
  color: #000;
}

.leaflet-control-geocoder {
  border-radius: 4px;
  background: white;
  min-width: 26px;
  min-height: 26px;
}

.leaflet-touch .leaflet-control-geocoder {
  min-width: 210px;
  min-height: 30px;
  border: 1px solid #000;
  border-radius: 15px;
  cursor: pointer;
}

.leaflet-control-geocoder a,
.leaflet-control-geocoder .leaflet-control-geocoder-icon {
  border-bottom: none;
}

.leaflet-control-geocoder .leaflet-control-geocoder-alternatives a {
  width: inherit;
  height: inherit;
  line-height: inherit;
}

.leaflet-control-geocoder a:hover,
.leaflet-control-geocoder .leaflet-control-geocoder-icon:hover {
  border-bottom: none;
  display: inline-block;
}

.leaflet-control-geocoder-form {
  vertical-align: middle;
  display: none;
}

}
.leaflet-control-geocoder-expanded .leaflet-control-geocoder-form {
  display: inline-block;
}

.leaflet-control-geocoder-form input {
  font-size: 120%;
  border: 0;
  background-color: transparent;
  width: 246px;
}

.leaflet-control-geocoder-icon {
  border-radius: 15px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12.2 13l3.4 6.6c.6 1.1 2.5-.4 2-1.2l-4-6.2z'/%3E%3Ccircle cx='10.8' cy='8.9' r='3.9' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.leaflet-touch .leaflet-control-geocoder-icon {
}

.leaflet-control-geocoder-throbber .leaflet-control-geocoder-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='%23000' stroke-linecap='round' stroke-width='1.6' viewBox='0 0 24 24'%3E%3Cdefs/%3E%3Cg%3E%3Cpath stroke-opacity='.1' d='M14 8.4l3-5'/%3E%3Cpath stroke-opacity='.2' d='M15.6 10l5-3'/%3E%3Cpath stroke-opacity='.3' d='M16.2 12H22'/%3E%3Cpath stroke-opacity='.4' d='M15.6 14l5 3m-6.5-1.4l2.9 5'/%3E%3Cpath stroke-opacity='.5' d='M12 16.2V22m-2-6.4l-3 5'/%3E%3Cpath stroke-opacity='.6' d='M8.4 14l-5 3'/%3E%3Cpath stroke-opacity='.7' d='M7.8 12H2'/%3E%3Cpath stroke-opacity='.8' d='M8.4 10l-5-3'/%3E%3Cpath stroke-opacity='.9' d='M10 8.4l-3-5'/%3E%3Cpath d='M12 7.8V2'/%3E%3CanimateTransform attributeName='transform' calcMode='discrete' dur='1s' repeatCount='indefinite' type='rotate' values='0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12'/%3E%3C/g%3E%3C/svg%3E");
}

.leaflet-control-geocoder-form-no-error {
  display: none;
}

.leaflet-control-geocoder-form input:focus {
  outline: none;
}

.leaflet-control-geocoder-form button {
  display: none;
}
.leaflet-control-geocoder-error {
  margin-top: 8px;
  margin-left: 8px;
  display: block;
  color: #444;
}
.leaflet-control-geocoder-alternatives {
  display: block;
  width: 272px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.leaflet-control-geocoder-alternatives-minimized {
  display: none;
  height: 0;
}
.leaflet-control-geocoder-alternatives li {
  white-space: nowrap;
  display: block;
  overflow: hidden;
  padding: 5px 8px;
  text-overflow: ellipsis;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.leaflet-control-geocoder-alternatives li a,
.leaflet-control-geocoder-alternatives li a:hover {
  width: inherit;
  height: inherit;
  line-height: inherit;
  background: inherit;
  border-radius: inherit;
  text-align: left;
}

.leaflet-control-geocoder-alternatives li:last-child {
  border-bottom: none;
  border-radius: 15px;
}
.leaflet-control-geocoder-alternatives li:hover,
.leaflet-control-geocoder-selected {
  border-radius: 15px;
  background-color: #e8f1ec; 
}
.leaflet-control-geocoder-address-detail {
}
.leaflet-control-geocoder-address-context {
  color: #666;
}

`;
