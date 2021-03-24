import styled from "styled-components";
import media from "styled-media-query";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  xsmall: "320px",
});

export const Container = styled.div`
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
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  img {
    height: 2.5em;
    padding-left: 1em;
  }

  h1 {
    font-style: italic;
    margin-left: 1em;
    padding-top: 0.4em;
    white-space: nowrap;
  }

  ${media.lessThan("large")`

    img {
        height: 1.4em;
        padding-left: 1em;
    }

    h1 {
        padding-top: 0em;
        font-size: 0.5em;
        margin-left: 0.5em;
    }
  `}

  ${media.lessThan("medium")`

    img {
        height: 1.1em;
        padding-left: 1em;
    }

    h1 {
        padding-top: 0em;
        font-size: 0.5em;
        margin-left: 0.5em;
    }
  `}

    ${media.lessThan("small")`

    img {
        height: 1.5em;
        padding-left: 1em;
    }

    h1 {
        font-size: 0.5em;
        margin-left: 0.5em;
    }
  `}

    ${customMedia.lessThan("xsmall")`

    img {
        height: 1.3em;
        padding-left: 0.5em;
    }

    h1 {
        font-size: 0.5em;
        margin-left: 0.5em;
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
    height: 1.5em;
    padding-right: 1em;
  }

  span {
    margin-right: 0.5em;
  }

  ${media.lessThan("large")`

img {
    height: 1em;
    padding-right: 1em;
}

span {
    font-size: 0.8em;
}
  `}

  ${media.lessThan("medium")`

    img {
        height: 1em;
        padding-right: 1em;
    }
    
    span {
        font-size: 0.6em;
    }
  `}

    ${media.lessThan("small")`

        img {
            height: 1em;
        }
        
        span {
            display: none;
        }
    `}

    ${customMedia.lessThan("xsmall")`

        img {
        height: 1em;
        }

        span {
            display: none;
        }
    `}
`;
