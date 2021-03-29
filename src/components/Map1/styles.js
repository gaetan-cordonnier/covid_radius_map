import styled from "styled-components";
import media from "styled-media-query";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  xsmall: "359px",
});

export const RevertSearch = styled.img`
  cursor: pointer;
  z-index: 999;
  position: absolute;
  right: 0;
  top: 0;
  margin-top 60px;
  margin-right: 20px;
  height: 3em;
  width: auto;
  border-radius: 25px:
`;

export const PrintAddress = styled.p`
  z-index: 1000;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 25px;
  margin-bottom: 50px;
  font-size: 12px;
  padding: 5px;
  color: transparent;
`;

export const LogoFTM = styled.div`
  z-index: 1000;
  width: 170px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 10px;
  margin-bottom: 15px;
  opacity: 60%;
`;

export const CertificateButton = styled.img`
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 95px;
  margin-right: 25px;
  height: 4em;
  width: auto;

  ${media.lessThan("huge")`
    margin-bottom: 75px;
    margin-right: 20px;
    height: 3.5em;
    width: 3.5;
  `}

  ${media.lessThan("large")`
    height: 3.2em;
    width: auto;
  `}

  ${media.lessThan("medium")`
    height: 3em;
    width: auto;
  `}

  ${media.lessThan("small")`
    height: 2.8em;
    width: auto;
  `}

  ${customMedia.lessThan("xsmall")`
    height: 2.5em;
    width: auto;
  `}
`;

export const PrintButton = styled.img`
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 25px;
  margin-right: 25px;
  height: 4em;
  width: auto;

  ${media.lessThan("huge")`
    margin-bottom: 20px;
    margin-right: 20px;
    height: 3.5em;
    width: auto;
  `}

  ${media.lessThan("large")`
    height: 3.2em;
    width: auto;
  `}

  ${media.lessThan("medium")`
    height: 3em;
    width: auto;
  `}

  ${media.lessThan("small")`
    height: 2.8em;
    width: auto;
  `}

  ${customMedia.lessThan("xsmall")`
    height: 2.5em;
    width: auto;
  `}
`;

export const DivMain = styled.main`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #000;
  padding: 5px;

  ${media.lessThan("large")`
    padding-bottom: 2px;
    padding-top: 2px;
  `}

  .leaflet-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .leaflet-popup-tip, .leaflet-popup-content-wrapper {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    text-align: center;
    background-color: #fff;
    color: #000;
  }

  .leaflet-container a {
    color: #000;
    }
  .leaflet-container a.leaflet-active {
    outline: 2px solid #888;
    }
  .leaflet-zoom-box {
    border: 2px dotted #38f;
    background: rgba(255,255,255,0.5);
  }

  .leaflet-control-geocoder {
    border-radius: 4px;
    background: white;
    min-width: 26px;
    min-height: 26px;
    margin-right: 15px;
  }

  .leaflet-touch .leaflet-control-geocoder {
    min-width: 210px;
    min-height: 30px;
    border: 2px solid #000;
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
    border-radius: 10px;
    width: 26px;
    height: 26px;
    border: none;
    background-color: white;
    background-image: url("/img/search-location.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-left: 3px;
    margin-top: 3px;
    cursor: pointer;
  }

  .leaflet-touch .leaflet-control-geocoder-icon {
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
