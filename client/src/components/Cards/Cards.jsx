import React from "react";
import StyledCards from './StyledCards.jsx'

//components
import Card from "../Card/Card.jsx";
import Paginated from "../Paginated/Paginated.jsx";

export default function AllCards({pokemonsXpage, allPokemons, paginado, currentPokemons, setCurrentPAge,currentPage}) {
  

    return (
      <div className="box">
        <Paginated
          pokemonsXpage={pokemonsXpage}
          allPokemons={allPokemons.length}
          paginado={paginado}
          currentPage={currentPage}
          setCurrentPAge={setCurrentPAge}
        />
        <StyledCards>
          {currentPokemons?.map((el) => {
            return (
              el.msg ? <Card key={1} msg={el.msg}/> :
              <Card 
                key={el.id}
                id={el.id} 
                name={el.name} 
                img={el.img} 
                typePrimary={el.typePrimary} 
                typeSecondary={el.typeSecondary} 
                //type={[el.typePrimary,el.typeSecondary]}
                //type={el.type ? el.type : el.types.map(el => el.name)}
                attack={el.attack}
              />
            );
          })}
        </StyledCards>
      </div>
    );
  }