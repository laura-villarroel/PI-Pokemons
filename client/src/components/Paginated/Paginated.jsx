import React from "react";
import { StyledNavPage} from "./StyledPaginated.jsx";

export default function Paginado({
    pokemonsXpage,
    allPokemons,
    paginado,
    setCurrentPAge,
    currentPage,
  }) {
    const pageNumber = [];
  
    let maxPages = Math.ceil(allPokemons / pokemonsXpage);
    for (let i = 0; i < maxPages; i++) {
      pageNumber.push(i + 1);
    }
  
    return (
      <StyledNavPage>
        <ul className="paginado">
          <button 
            onClick={() =>
              setCurrentPAge(currentPage === 1 ? currentPage : currentPage - 1)
            }>Prev</button>
          {pageNumber?.map((number) => (
            <button
              className={`B${number}`}
              key={number}
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPAge(currentPage === maxPages ? currentPage : currentPage + 1)}
          > Next </button>
        </ul>
      </StyledNavPage>
    );
  }
  