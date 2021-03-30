import styled from "styled-components";

export const DivModal = styled.div`
  z-index: 2000;
  max-width: 70vw;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 2px 2px 6px 0px #4a4a4a;

  font-family: "Montserrat", "Roboto", sans-serif;
  position: absolute;
  font-size: 1em;
  color: #000;

  .note {
    font-size: 0.9em;
  }

  .close {
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 6px;
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    background-color: #000;
    border-radius: 10px;
    cursor: pointer;

    :after {
      position: absolute;
      content: "+";
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }

    :hover {
      background-color: #7aedad;
    }
  }
`;
