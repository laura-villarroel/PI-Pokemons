import React from "react";
import { Link } from "react-router-dom";
import StyledDiv from "./StyledLanding.jsx";

const LangindPage = () => {
  return (
    <StyledDiv>
      <div className="container">
        <h1>Welcome to the app of</h1>
        <img
          //src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          src="https://images.wikidexcdn.net/mwuploads/wikidex/7/70/latest/20190529140416/Logo_de_Pok%C3%A9mon_HOME.png"
          alt="Pokemon"
        />
        </div>
        <Link to="/home">
          <button>Enter Home</button>
        </Link>
      
    </StyledDiv>
  );
};

export default LangindPage;
