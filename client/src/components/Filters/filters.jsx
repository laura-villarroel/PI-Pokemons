import React from "react";
import { StyledFilter } from "./StyledFilters.jsx";
import { Link } from "react-router-dom";


export default function Filters({allTypes, handleReset, handleOrigin, handleFilterType,handleSortPokemons}) {



    return (
      <StyledFilter>
        <h3>FILTERS</h3>
        <div className="filters">
        <label>By origin</label>
          <select onChange={(e) => handleOrigin(e)}>
            <option value="all">All</option>
            <option value="api">Existent</option>
            <option value="database">Created</option>
          </select>
          
          <label>By type</label>
          <select onChange={(e) => handleFilterType(e)}>
            <option value="all">All</option>
            {allTypes?.map((el) => {
              return <option key={el.id} value={el.name}>{el.name}</option>;
            })}
          </select>
        <h2>ORDEN BY</h2> 
          <select onChange={(e) => handleSortPokemons(e)} id="OrdenBy">
            <option value="NONE" >None</option>
            <option value="ABC">By name from A to Z</option>
            <option value="ZYX">By name from Z to A</option>
            <option value="asc">By attack from min to max</option>
            <option value="desc">By attack from max to min</option>
          </select>
        </div>
        <button onClick={(e)=>handleReset(e)}>Reset</button>
        <hr />
        <Link to="/pokemon/create" className="link">CREATE POKEMON</Link>
      </StyledFilter>
    );
  }
  