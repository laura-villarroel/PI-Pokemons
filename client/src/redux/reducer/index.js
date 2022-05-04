import {
    GET_ALL_POKEMONS,
    GET_ALL_TYPES,
    CREATE_POKEMON,
    GET_POKEMON,
    GET_DETAIL_POKEMON,
    CLEAN_DETAIL_POKEMON,
    FILTER_BY_TYPE,
    FILTER_BY_ORIGIN,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
} from "../actions/actionType.js";

const initialState = {
    pokemons: [],
    //pokemonsBack: [],
    types: [],
    pokemonDetails: {},
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                //pokemonsBack: action.payload,
              };
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload,
              };
        case CREATE_POKEMON:
            return {
                ...state,
                pokemons:[...state.pokemons,action.payload]
              };
        
        case GET_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
              };

        case GET_DETAIL_POKEMON:
            return{
                ...state,
                pokemonDetails: action.payload
              }

        case CLEAN_DETAIL_POKEMON:
            return{
                ...state,
                pokemonDetails: action.payload
              }
        
        case FILTER_BY_TYPE:
        
        case FILTER_BY_ORIGIN:
        
        case ORDER_BY_NAME:
        
        case ORDER_BY_ATTACK:


    }


  }