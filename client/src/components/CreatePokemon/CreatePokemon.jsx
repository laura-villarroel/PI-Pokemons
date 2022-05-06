import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledCrate, { StyledRange } from "./StyledCreate.jsx";
import StyledNav from "../NavBar/StyledNav.jsx";
import {Link} from "react-router-dom";
import { getAllTypes, createPokemon } from "../../redux/actions/actionsCreators.js";
import { validate } from "./validate";

export default function CreatePokemon() {
  return (
    <StyledCrate>
      <StyledNav>
        <Link to="/home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon"
          />
        </Link>
         <div className="circulo" /> 
      </StyledNav>
      <form >
        <h2>CREATE YOUR POKEMON</h2>
        </form>


      </StyledCrate>
)
}