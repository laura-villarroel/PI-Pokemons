import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPokemon, cleanDetailPokemon } from "../../redux/actions/actionsCreators.js";
import StyledDetails from "./StyledDetails.jsx";
import { Link } from "react-router-dom";
import imgeAllTypes from "../../image/imgeAllTypes.js";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailPokemon(props.match.params.id));
    return () => dispatch(cleanDetailPokemon());
  }, []);

  const pokeDetail = useSelector((state) => state.pokemonDetails);
  const types=pokeDetail.typeSecondary? [pokeDetail.typePrimary, pokeDetail.typeSecondary]:[pokeDetail.typePrimary]


  return (
    <StyledDetails>
      {pokeDetail.id ? (
        <div className="data">
          <div className="data2">
            <div>
              <Link to="/home">
                <button>Back to Home</button>
              </Link>
            </div>

            <div className="data3">
              <h4>ID: {pokeDetail.id}</h4>
              <h3>TYPES: </h3>
              <div className="types">
                {types.map((type) => {
                      return (
                        <div>
                          <p key={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </p>
                          <img src={imgeAllTypes[type]} alt="" />
                        </div>
                      );
                    })}
              </div>
              <h5>HP: {pokeDetail.hp}</h5>
              <h5>ATTACK: {pokeDetail.attack}</h5>
              <h5>DEFENSE: {pokeDetail.defense}</h5>
              <h5>SPEED: {pokeDetail.speed}</h5>
              <h5>HEIGHT: {pokeDetail.height} dm</h5>
              <h5>WEIGHT: {Math.round(pokeDetail.weight)} hgr</h5>
            </div>
            <div>
              <h1>
                {pokeDetail.name.charAt(0).toUpperCase() +
                  pokeDetail.name.slice(1)}
              </h1>
            </div>
          </div>

          <img src={pokeDetail.img} alt="" />
        </div>
      ) : (
        <div className="loading">
          <p>Loading...</p>
          <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072fa096-b852-4161-ae5d-8f42f037c051/d53dp2p-486dc6b9-730e-4908-bcb8-0dcfda8a96df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MmZhMDk2LWI4NTItNDE2MS1hZTVkLThmNDJmMDM3YzA1MVwvZDUzZHAycC00ODZkYzZiOS03MzBlLTQ5MDgtYmNiOC0wZGNmZGE4YTk2ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BQEuHqarrPr2mcMG92G3eCUfXftXBWiKVapqGqKUNgs' alt="" />
          
        </div>
      )}
    </StyledDetails>
  );
}
