import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./StyledNav";
import SearchBar from '../SearchBar/SearchBar.jsx'

export default function NavBar() {
  return (
    <StyledNav>
      <Link to='/home'>
      <img
        src="https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon30.png"
        alt="Pokemon"
      />
      </Link>
      <div className="circulo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"
        alt="Pokemon"
      />
      </div>
      {<div className="pokemondiv">
      <img className="pokemon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon"
      />
      </div>}
      <SearchBar/>
    </StyledNav>
  );
}