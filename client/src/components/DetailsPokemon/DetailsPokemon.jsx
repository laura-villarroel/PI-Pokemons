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
              <h5>HEIGHT: {pokeDetail.height} cm</h5>
              <h5>WEIGHT: {Math.round(pokeDetail.weight)} kg</h5>
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
        </div>
      )}
    </StyledDetails>
  );
}
