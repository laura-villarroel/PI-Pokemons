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
        border-radius: 50%;
        border-style: solid;
        border-width: 1rem;
        position: absolute;
        justify-self: center;
        top: 35px;
    }

    img{
        height: 60px;
        margin-right: 1000px;
    }

`
export default StyledNav