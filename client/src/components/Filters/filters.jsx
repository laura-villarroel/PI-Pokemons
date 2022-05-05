import React from "react";
import { StyledFilter } from "./StyledFilters.jsx";
import { Link } from "react-router-dom";

//!handleSortBySTR y  handleSortByABC deben ser una sola funcion 
export default function Filters({allTypes, handleReset, handleOrigin, handleFilterType,handleSortPokemons, handleSortByABC, handleSortBySTR}) {



    return (
      <StyledFilter>
        <h3>Filters</h3>
        <div className="filters">
       
        <label>Orden by</label> {/* esto sustituye los dos ordenamientos  */}
          <select onChange={(e) => handleSortPokemons(e)} id="OrdenBy">
          {/* <option selected disabled>alfabetical</option> */}
            <option value="NONE" >None</option>
            <option value="ABC">By name from A to Z</option>
            <option value="ZYX">By name from Z to A</option>
            <option value="asc">By attack from min to max</option>
            <option value="desc">By attack from max to min</option>
          </select>
  
         
          <label>Sort by name</label>
          <select onChange={(e) => handleSortByABC(e)} id="sortABC">
          {/* <option selected disabled>alfabetical</option> */}
            <option value="NONE" hidden>None</option>
            <option value="ABC">A to Z</option>
            <option value="ZYX">Z to A</option>
          </select>
  
          <label>sort by attack</label>
          <select onChange={(e) => handleSortBySTR(e)}>
            {/* fuerza */}
            <option value="none" hidden>None</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
          
          <label>by origin</label>
          <select onChange={(e) => handleOrigin(e)}>
            <option value="all">All</option>
            <option value="api">ApiPokemon</option>
            <option value="database">Database</option>
          </select>
          
          <label>by type</label>
          <select onChange={(e) => handleFilterType(e)}>
            <option value="all">All</option>
            {allTypes?.map((el) => {
              return <option key={el.id} value={el.name}>{el.name}</option>;
            })}
          </select>
        </div>
        <button onClick={(e)=>handleReset(e)}>Reset</button>
        <hr />
        <Link to="/pokemon" className="link">CREATE POKEMON</Link>
      </StyledFilter>
    );
  }
  