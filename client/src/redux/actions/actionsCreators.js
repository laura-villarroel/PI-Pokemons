import axios from 'axios';
import {
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  CREATE_POKEMON,
  GET_POKEMON,
  GET_DETAIL_POKEMON,
  CLEAN_DETAIL_POKEMON,
  FILTER_BY_TYPE,
  FILTER_BY_ORIGIN,
  SORT_POKEMONS,
} from './actionType.js';

export const getAllPokemons = () => {
  return async function (dispatch) {
    return axios
      .get('/pokemons')
      .then(response =>
        dispatch({ type: GET_ALL_POKEMONS, payload: response.data })
      )
      .catch(error => console.log(error));
  };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    return axios
      .get('/types')
      .then(response =>
        dispatch({ type: GET_ALL_TYPES, payload: response.data })
      )
      .catch(error => console.log(error));
  };
};

export const createPokemon = pokemon => {
  return async function (dispatch) {
    return axios
      .post(`/pokemons`, pokemon)
      .then(response =>
        dispatch({ type: CREATE_POKEMON, payload: response.data })
      )
      .catch(error => console.log(error));
  };
};

export const getPokemon = name => {
  return async function (dispatch) {
    return axios
      .get(`/pokemons?name=${name}`)
      .then(response => dispatch({ type: GET_POKEMON, payload: response.data }))
      .catch(error => {
        console.log(error);
        return dispatch({
          type: GET_POKEMON,
          payload: { msg: `${name} doesn't exists` },
        });
      });
  };
};
export const getDetailPokemon = id => {
  return async function (dispatch) {
    return axios
      .get(`/pokemons/${id}`)
      .then(response =>
        dispatch({ type: GET_DETAIL_POKEMON, payload: response.data })
      )
      .catch(error => console.log(error));
  };
};
export const cleanDetailPokemon = () => {
  return {
    type: CLEAN_DETAIL_POKEMON,
    payload: {},
  };
};

//export const deletePokemon = () => {}

//___________________________________________
//* ACTIONS de filtrado y ordenamiento
//___________________________________________
export const filterByType = payload => {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
};
export const filterByOrigin = payload => {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
};

export const sortPokemons = payload => {
  return {
    type: SORT_POKEMONS,
    payload,
  };
};
