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
            const filterPokemonType=action.payload === 'all'
            ? state.pokemons
            :state.pokemons.filter(elem=>
                elem.typePrimary=== action.payload || elem.typeSecondary===action.payload)
            return {
                ...state,
                pokemons:filterPokemonType
             
                }
        
        case FILTER_BY_ORIGIN:
            const filterPokemonOrigin= //! revisar que pasa cuando es all
            action.payload === 'api'
            ? state.pokemons.filter(elem=> isNaN(elem.id)===false)
            :state.pokemons.filter(elem=> isNaN(elem.id)!==false)
            return {
                ...state,
                pokemons: filterPokemonOrigin,
              };
    
        case ORDER_BY_NAME:
            const  orderByName=action.payload ==='A to Z' //ABC
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
            :state.pokemons.sort(function (a, b) { 
                if (a.name > b.name) {
                    return -1;
                  }
                  if (a.name < b.name) {
                    return 1;
                  }   
                  return 0;
            })
            return {
                ...state,
                pokemons: orderByName, // se puede intentar retornar solo el estado ya que sort modifica el arreglo
            }

        
        case ORDER_BY_ATTACK:
            const  orderByAttack=action.payload ==='menor a mayor' // asc
            ? state.pokemons.sort((a, b) => a.attack - b.attack)
            : state.pokemons.sort((a, b) => b.attack - a.attack);
            return {
                ...state,
                pokemons: orderByAttack,
            }
            default:
             return state;
    }
  };

  export default reducer;