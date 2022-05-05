import {
    GET_ALL_POKEMONS,
    GET_ALL_TYPES,
    CREATE_POKEMON,
    GET_POKEMON,
    GET_DETAIL_POKEMON,
    CLEAN_DETAIL_POKEMON,
    FILTER_BY_TYPE,
    FILTER_BY_ORIGIN,
    SORT_POKEMONS 
} from "../actions/actionType.js";

const initialState = {
    pokemons: [],
    pokemonsAll: [],
    types: [],
    pokemonDetails: {},
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                pokemonsAll: action.payload, 
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
            const allPokemons= state.pokemonsAll;
            const filterPokemonType=action.payload === 'all'
            ? allPokemons
            :allPokemons.filter(elem=>
                elem.typePrimary=== action.payload || elem.typeSecondary===action.payload)
            return {
                ...state,
                pokemons:filterPokemonType
             
                }
        
        case FILTER_BY_ORIGIN:
            const allPokemons1= state.pokemonsAll;
            const filterPokemonOrigin=
            action.payload === 'all' 
            ?allPokemons1
            :action.payload === 'api'
            ? allPokemons1.filter(elem=> isNaN(elem.id)===false)
            :allPokemons1.filter(elem=> isNaN(elem.id)!==false)
            return {
                ...state,
                pokemons: filterPokemonOrigin,
              };
    
         case SORT_POKEMONS:
            const allPokemons2= state.pokemonsAll;
             const sortPokemons=action.payload ==='ABC'
             ? state.pokemons.sort(function (a, b) { 
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
                }
                )
            :action.payload ==='ZYX'
            ?state.pokemons.sort(function (a, b) { 
                if (a.name > b.name) {
                    return -1;
                  }
                  if (a.name < b.name) {
                    return 1;
                  }   
                  return 0;
            })
            :action.payload ==='asc'
            ? state.pokemons.sort((a, b) => a.attack - b.attack)
            :action.payload ==='desc'
            ?state.pokemons.sort((a, b) => b.attack - a.attack)
            :allPokemons2    //!condicion para cuando es none, no deberia de ordenar nada, revisar se mntiene igual   
            return {
              ...state,
              pokemons:sortPokemons,
                };

            default:
             return state;
    }
  };

  export default reducer;