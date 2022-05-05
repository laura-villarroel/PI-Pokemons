import styled from "styled-components";
import allColors from '../../colorsPalette/colors.js'

export const StyledNavPage = styled.nav`
  display: flex;
  justify-content: right;
  margin-right: 20px;
  //color: ${({currentPage}) => currentPage === 1 ? 'blue' : 'red'};
  
  button{
     /* background-color: transparent; */
      color: black;
      outline: none;
      margin: 5px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 5px;
      padding: 0.3rem 0.6rem;
      cursor: pointer;
      transition: 0.2s linear;

    &:focus{
    background-color: ${allColors.colors[0]};
    }

    &:hover{
        background-color: ${allColors.colors[1]};
        color: white;
     }
  }

`
