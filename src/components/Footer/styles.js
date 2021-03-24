import styled from "styled-components";
import media from "styled-media-query";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  xsmall: "320px",
});

export const Container = styled.div`
  font-family: "Montserrat", "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  width: 100%;
  height: 8vh;
  color: #808080;
  border-top: 0.5px solid #808080;

  img {
    padding-left: 1em;
    height: 2.5em;
  }

  ${media.lessThan("large")`

    img {
      height: 1em;
    }

    span {
      font-size: 0.4em;
    }
`}

  ${media.lessThan("medium")`
    img {
      height: 1.2em;
    }

    span {
      font-size: 0.5em;
    }
  `}

  ${media.lessThan("small")`
    img {
      padding-left: 0.3em;
      height: 1em;
    }

    span {
      font-size: 5px;
    }
  `}

  ${customMedia.lessThan("xsmall")`
    img {
      padding-left: 0.2em;
      height: 0.9em;
    }

    span {
      font-size: 5px;
    }
  `}
`;

export const Sponsors = styled.div`
  padding-right: 1em;

  img {
    height: 4em;
  }

  ${media.lessThan("large")`
  img {
    height: 1.5em;
  }
`}

  ${media.lessThan("medium")`
    img {
      height: 1.5em;
    }
  `}

  ${media.lessThan("small")`
    padding-right: 0.3em;

    img {
    height: 1.5em;
    }
  `}

  ${customMedia.lessThan("xsmall")`
  padding-right: 0.2em;

  img {
  height: 1em;
  }
`}
`;
