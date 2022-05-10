import styled from "styled-components";
import allColors from "../../colorsPalette/colors.js";

const StyledNav = styled.nav`
    background-color: ${allColors.colors[1]};
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 90px;
    justify-content: space-evenly;
    border-bottom: 20px solid black;

    .circulo{
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 60%;
        border-style: solid;
        border-width: 1rem;
        position: absolute;
        justify-self: center;
        top: 35px;
    }

    .pokemon{
        height: 80px;   
    }

    .pokemondiv{
     position: absolute;
        top:10px;
       margin-left:1300px;
    }

    img{
        height: 100px;
        margin-right: 1300px;
    }

    button {
        background: rgba(44, 44, 44, 0.473);
        border: 2px solid ${allColors.mainColor};
        color: ${allColors.mainColor};
        text-align: center;
        height: 35px;
        width: 120px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        margin-bottom: 5px;
        position: absolute;
        margin-left:-150px;
        top:30px;

        &:hover {
          border: 2px solid white;
          color: white;
        }
      }
`
export default StyledNav