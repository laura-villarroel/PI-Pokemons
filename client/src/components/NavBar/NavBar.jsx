import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./StyledNav";
import SearchBar from '../SearchBar/SearchBar.jsx'

export default function NavBar() {
  return (
    <StyledNav>
      <Link to='/home'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon"
      />
      </Link>
      <div className="circulo"/>
      <SearchBar/>
    </StyledNav>
  );
}