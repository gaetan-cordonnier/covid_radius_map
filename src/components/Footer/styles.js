import styled from "styled-components";
import media from "styled-media-query";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  xsmall: "359px",
});

export const DivFooter = styled.footer`
  font-family: "Montserrat", "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  width: 100%;
  height: 8vh;
  color: #808080;
  border-top: 0.5px solid #808080;
  position: fixe;
  bottom: 0;

  img {
    padding-left: 1em;
    height: 45px;
    width: auto;
  }
  span {
    font-size: 10px;
  }

  ${media.lessThan("huge")`
    img {
      height: 2em;
      width: auto;
    }

    span {
      font-size: 8px;
    }
  `}

  ${media.lessThan("large")`
    img {
      height: 1.5em;
      width: auto;
    }

    span {
      font-size: 5px;
    }
  `}

  ${media.lessThan("medium")`
    img {
      height: 1.4em;
      width: auto;
    }
  `}

  ${media.lessThan("small")`
    img {
      padding-left: 0.5em;
      height: 1.4em;
      width: auto;
    }

    .lille {
      display: none;
    }
  `}

  ${customMedia.lessThan("xsmall")`
    img {
      padding-left: 0.2em;
      height: 1.2em;
      width: auto;
    }
  `}
`;

export const Sponsors = styled.div`
  padding-right: 1em;

  img {
    height: 4em;
    width: auto;
  }

  ${media.lessThan("huge")`
    img {
      height: 2em;
      width: auto;
    }
  `}

  ${media.lessThan("large")`
    img {
      height: 1.5em;
      width: auto;
    }
  `}

  ${media.lessThan("small")`
    padding-right: 0.5em;

    .lille {
      display: none;
    }
  `}

  ${customMedia.lessThan("xsmall")`
    padding-right: 0.2em;

    img {
    height: 1em;
    width: auto;
    }
  `}
`;
