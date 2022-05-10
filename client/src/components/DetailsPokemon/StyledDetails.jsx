import styled from "styled-components";
import AllColors from "../../colorsPalette/colors.js";

const StyledDetails = styled.div`
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(239, 62, 51, 1) 48%,
    rgba(255, 255, 255, 1) 48%
  );
  .circulo{
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 60%;
        border-style: solid;
        border-width: 1rem;
        position: absolute;
        top: 320px;
        margin-left:700px;
    }

  .linea{
        width: 2px;
        height: 756px;
        background-color: #010000;
        /* border-radius: 60%; */
        border-style: solid;
        border-width: 1rem;
        position: absolute;
        margin-left:750px;
        top: 0px;
    }
.pokemon{
  position:absolute;
  top:120px;
  margin-left:1000px;
}
  .loading {
  }
  .pokebola{
    position:absolute;
        top:250px;
       margin-left:980px;
  }
  .data {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 100vh;
    justify-content: space-between;
    align-items: center;

    img {
      width: 550px;
      margin-right: 40px;
     
     
    }

    .data2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 30px;
      text-align: left;
      height: 650px;
      h1 {
        color: white;
        font-size: 100px;
        margin-bottom: 0px;
        margin-top: 30px;
      }
      button {
        background: rgba(44, 44, 44, 0.473);
        border: 2px solid ${AllColors.mainColor};
        color: ${AllColors.mainColor};
        text-align: center;
        height: 35px;
        width: 120px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        margin-bottom: 0px;
       
        &:hover {
          border: 2px solid white;
          color: white;
        }
      }
      .data3 {
        margin-left: 50px;

        h3 {
          font-size: 20px;
          margin: 0px;
        }

        h4 {
          font-size: 30px;
        }
        h5 {
          font-size: 15px;
        }
        p {
          font-size: 15px;
        }

        .types {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: start;

          img {
            width: 50px;
          }
        }
      }
    }
  }
`;
export default StyledDetails;
