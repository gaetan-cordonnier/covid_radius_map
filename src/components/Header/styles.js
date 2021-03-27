import styled from "styled-components";
import media from "styled-media-query";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  xsmall: "359px",
});

export const DivHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  width: 100%;
  height: 7vh;
  border-bottom: 0.5px solid #7aedad;
  font-family: "Montserrat", "Roboto", sans-serif;
  color: #7aedad;
  position: inherit;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  img {
    height: 1.8em;
    width: auto;
    padding-left: 1em;
  }

  h1 {
    font-style: italic;
    font-size: 0.8em;
    margin-left: 0.5em;
    padding-top: 0.3em;
    white-space: nowrap;
  }

  ${media.lessThan("huge")`
    img {
      height: 1.4em;
      width: auto;
      padding-left: 1em;
    }

    h1 {
      padding-top: 0.2em;
      font-size: 0.6em;
      margin-left: 0.5em;
    }
  `}

  ${media.lessThan("large")`
    img {
      height: 1.2em;
      width: auto;
      padding-left: 1em;
    }

    h1 {
      padding-top: 0.2em;
      font-size: 0.5em;
      margin-left: 0.5em;
    }
  `}

  ${media.lessThan("medium")`
    img {
      height: 1.1em;
      width: auto;
    }

    h1 {
      padding-top: 0.1em;
    }
  `}

  ${customMedia.lessThan("xsmall")`
    img {
      padding-left: 0.5em;
    }

    h1 {
      font-size: 0.5em;
    }
  `}
`;

export const Linkedin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: #fff;

  img {
    height: 1.3em;
    width: auto;
    padding-right: 1em;
  }

  span {
    font-size: 0.9em;
    margin-right: 0.5em;
  }

  ${media.lessThan("huge")`
  img {
    height: 1em;
    width: auto;
    padding-right: 1em;
  }

  span {
    font-size: 0.8em;
  }
  `}

  ${media.lessThan("large")`
    img {
      height: 0.9em;
      width: auto;
      padding-right: 1em;
    }

    span {
      font-size: 0.7em;
    }
  `}

  ${media.lessThan("medium")`
    img {
      height: 0.8em;
      width: auto;
    }
    
    span {
      font-size: 0.6em;
    }
  `}

  ${media.lessThan("small")`
    img {
      height: 0.7em;
      width: auto;
    }
    
    span {
      display: none;
    }
  `}

  ${customMedia.lessThan("xsmall")`
    img {
    height: 0.6em;
    width: auto;
    }
  `}
`;
