import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  border-style: solid;
  border-width: 3px;
  width: 300px;
  height: 370px;
  margin: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 60%,
    rgba(239, 62, 51, 1) 60%
  );

  h4{
  margin-bottom: 0px;
  }

  .divIMG {
    //border: 5px solid black;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    background-color: white;
    border-radius: 50%;
    .mainIMG {
      height: 100px;
    }
  }

  &:hover {
    box-shadow: 2px 2px 3px 2px black;
  }

  .type {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    h3 {
      font-size: 15px;
    }

    div {
      margin-right: 15px;
      margin-left: 15px;
    }
    .typeIMG {
      width: 50px;
    }
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyleNotFound = styled.div`
  height: 500px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default StyledCard;
