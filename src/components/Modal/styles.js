import styled from "styled-components";

export const DivModal = styled.div`
  z-index: 2000;
  max-width: 70vw;
  padding: 20px;
  padding-top: 40px;
  background: #f5f5f5;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 0px #4a4a4a;

  font-family: sans-serif;
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
    margin-right: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    background-color: #000;
    border-radius: 3px;
    cursor: pointer;

    :after {
      position: absolute;
      content: "X";
      font-size: 15px;
      color: #fff;
    }

    :hover {
      background-color: #7aedad;
    }
  }
`;
