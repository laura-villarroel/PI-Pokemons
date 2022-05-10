import styled from "styled-components";
//import img from "../../img/pokemon-pikachu-wallpaper-1651733006.jpg";
import img from "../../image/pokemonAll.jpg";//! buscar 
import allColors from "../../colorsPalette/colors.js"; //! buscar

const StyledDiv = styled.div`
  background-image: url(https://imagem.natelinha.uol.com.br/grande/Pokemon2007.jpg);
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: -webkit-sticky;
    margin-top: 9rem;
    margin-left: 55rem;

  

    h1 {
      color: yellow;
      margin-bottom: 50px;
      font-size: 40px;
    }

    img {
      width: 500px;
      height: auto;
      animation-duration: 3s;
      animation-name: img;
      animation-iteration-count: infinite;

      @keyframes img {
        50% {
          width: 500px;
          height: auto;
        }

        50% {
          width: 600px;
          height: auto;
        }
      }
    }
  }
  button {
      position: fixed;
      bottom: 160px;
      right:235px;
      background-color: ${allColors.mainColor};
      padding: 10px;
      border-radius: 5px;
      font-size: 20px;
      color: black;
      cursor: pointer;
      outline: none;
      border: none;
      border: 3px solid ${allColors.mainColor};

      &:hover {
        border: 3px solid ${allColors.colors[0]};
      }
    }
`;
export default StyledDiv;
