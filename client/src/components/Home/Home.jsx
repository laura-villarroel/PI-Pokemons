import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {getAllPokemons, getAllTypes, filterByType, filterByOrigin,sortPokemons } from '../../redux/actions/actionsCreators.js' //! corregir
import { StyledHome } from "./SlyledHome.jsx";
//---------------------
import NavBar from "../NavBar/NavBar.jsx";
import Cards from "../Cards/Cards.jsx";
import Filters from "../Filters/filters.jsx";

export default function Home() {

    const allTypes = useSelector((state) => state.types);
    const allPokemons = useSelector((state) => state.pokemons); // es lo mismo que hacer mapSatetoProps
    const dispatch = useDispatch(); // es lo mismo que hacer mapdispatch to props
  
    const [currentPage, setCurrentPAge] = useState(1);
    const [pokemonsXpage] = useState(12);
   const [orden, setOrden] = useState('') 
   
  
    let indexLastPokemon = currentPage * pokemonsXpage; //12
    let indexFirstPokemon = indexLastPokemon - pokemonsXpage; //0
    let currentPokemons = allPokemons.slice(indexFirstPokemon, indexLastPokemon);
  
    const paginado = (pageNumber) => {
      setCurrentPAge(pageNumber);
    };
  
    useEffect(() => {
      dispatch(getAllPokemons());
    }, [dispatch]);
  
    useEffect(() => {
      dispatch(getAllTypes());
    }, [dispatch]);
  
    const handleOrigin = (e) => {
      e.preventDefault()
      dispatch(filterByOrigin(e.target.value))
      setCurrentPAge(1)
    }
  
   
    const handleSortPokemons = (e) => {
      e.preventDefault()
      dispatch(sortPokemons(e.target.value))
      setCurrentPAge(1)
       setOrden(`Ordenado ${e.target.value}`) 
    }


    const handleFilterType = (e) => {
      dispatch(filterByType(e.target.value))
    }
  
    
  
    function handleReset(e){
      e.preventDefault()
      window.location.reload()
    
    }
 
    return (
      <>
        <NavBar />
        <StyledHome>
        
          <Cards 
          pokemonsXpage={pokemonsXpage}
          allPokemons={allPokemons}
          paginado={paginado}
          currentPokemons = {currentPokemons}
          currentPage={currentPage}
          setCurrentPAge={setCurrentPAge}
          />

          <Filters
          allTypes={allTypes}
          handleReset={handleReset}
          handleOrigin={handleOrigin}
          handleFilterType={handleFilterType}
          handleSortPokemons={handleSortPokemons}/>
        </StyledHome>
      </>
    );
  }
  