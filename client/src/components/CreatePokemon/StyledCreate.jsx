import styled from "styled-components";
import img from "../../image/createIMG.jpg";
import allColors from "../../colorsPalette/colors";


const StyledCrate = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;

  form {
    position: relative;
    top: 20px;
    left: 900px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    border: 2px solid black;
    background: linear-gradient(
      0deg,
      rgba(239, 62, 51, 0.70) 67%,
      rgba(21, 43, 98, 0.70) 100%
    );
    width: 600px;
    height: 530px;
    color: white;
  }
  

  h1 {
    width: 294px;
    margin-right: 5px;
    visibility: hidden;
  }
  .error {
    color: white;
    font-size: 11px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 13px;
  
    .inputIMG {
      width: 400px;
    }

    input {
      width: 200px;
      border:none;
      border-bottom: 2px solid white;
      background: none;
      outline: none; 
      color: ${allColors.mainColor};
      font-size: 15px;
      text-align: center;
    }

    h3{
      margin-bottom: 5px;
    }
    
  }
  .barrasContainer {
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 10px;
  }
  .tam {
    display: grid;
    grid-template-columns: auto auto;
    margin: 10px;

    h6 {
      margin: 0;
    }
    input {
      width: 50px;
      text-align: center;
      margin-top: 10px;
      border:none;
      border-bottom: 2px solid white;
      background: none;
      outline: none; 
      color: ${allColors.mainColor};
      font-size: 15px;
    }
  }
  .types {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 40px;
    margin: 20px;
    align-items: center;
    justify-content: space-around;

    .type2 {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;

      div {
        background-color: ${allColors.colors[0]};
        border-radius: 5px;
        margin: 10px;
        padding: 7px;
        width: 80px;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      button {
        width: 17px;
        height: 17px;
        margin: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
  .finalButton{
    background: rgba(44, 44, 44, 0.473);
    border: 2px solid ${allColors.mainColor};
    color: ${allColors.mainColor};
    text-align: center;
    height: 30px;
    width: 150px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    margin: 10px;

    &:disabled{
      opacity: 40%;
    }
    &:hover{
        border: 2px solid white;
        color: white;
    }
  }
  .selectType{
    background: rgba(44, 44, 44, 0.473);
    border: 2px solid ${allColors.mainColor};
    color: ${allColors.mainColor};
    text-align: center;
    border-radius: 5px;
  }
`;

export const StyledRange = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 10px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, 
    ${allColors.colors[1]} 0%, 
    ${allColors.colors[1]} ${(props.value * 100)/(props.max)}%, 
    #fff ${(props.value * 100)/(props.max)}%, 
    #fff 100%);`};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  margin: 8px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 23px;
    height: 23px;
    //background-image: radial-gradient(circle, #f7f7fc 40%, black 45%);
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg);
    border-radius: 50%;
    //box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

export default StyledCrate;
