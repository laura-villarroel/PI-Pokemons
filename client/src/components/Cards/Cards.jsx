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
          { allPokemons[0]
          ?( currentPokemons?.map((el) => {
            return (
              el.msg ? <Card key={1} msg={el.msg}/> :
              <Card 
                key={el.id}
                id={el.id} 
                name={el.name} 
                img={el.img} 
                typePrimary={el.typePrimary} 
                typeSecondary={el.typeSecondary} 
                attack={el.attack}
                moves={el.moves}
              />
            );
          }))
          :( <div className="loading">
          <p>Loading...</p>
          <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072fa096-b852-4161-ae5d-8f42f037c051/d53dp2p-486dc6b9-730e-4908-bcb8-0dcfda8a96df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MmZhMDk2LWI4NTItNDE2MS1hZTVkLThmNDJmMDM3YzA1MVwvZDUzZHAycC00ODZkYzZiOS03MzBlLTQ5MDgtYmNiOC0wZGNmZGE4YTk2ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BQEuHqarrPr2mcMG92G3eCUfXftXBWiKVapqGqKUNgs' alt="" />
        </div>
          )
          }
        </StyledCards>
      </div>
    );
  }