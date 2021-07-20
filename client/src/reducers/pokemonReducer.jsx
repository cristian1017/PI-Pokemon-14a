import React from 'react';
import { CREATED, GET_DETAIL, GET_POKEMONS, SELECT_OTRO, SELECT_TYPE } from '../actions/pokemon';

const initialState = {
    pokemons: [],
    pokemonDetails: {},
    filterState: "ninguno",
    filterOther:'predeterminado',
    created: '',
  };
  

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
          return {
            ...state,
            pokemons: action.payload,
          };
        case GET_DETAIL:
          return {
            ...state,
            pokemonDetails: action.payload,
          };
        case SELECT_TYPE:
          return {
            ...state,
            filterState: action.payload
          };
        case SELECT_OTRO:
          return {
            ...state,
            filterOther: action.payload
          };
        case CREATED:
          return {
            ...state,
            created: action.payload,
          };
        default:
          return state;
      }
}
