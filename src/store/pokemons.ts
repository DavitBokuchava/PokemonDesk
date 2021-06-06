/* eslint-disable */
import req from '../utils/request';
import { ConfigEndpoints } from '../utils/request';
import { Dispatch } from 'redux';
import { ItypesRequest, PokemonsReq, Ipokemons } from '../interfaces/pokemons';
import { IstateRequest } from '../interfaces/index';
import { IinitialState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
  // FETCH_POKEMONS = 'FETCH_POKEMONS',
  // FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
  // FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT',
}
export enum GetPokemonsActionTypes {
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
  FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT',
}

interface TypeAction {
  type: PokemonsActionTypes;
  payload?: string[];
}
interface PokemonsAction {
  type: GetPokemonsActionTypes;
  payload?: Ipokemons | null; // type object makes error
}
export interface IpokemonsInitialState {
  types: IstateRequest<string>;
  pokemons: IstateRequest<string>;
}
const initialState: IpokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
  pokemons: {
    isLoading: false,
    data: null,
    error: null,
  },
};
type ActionTypes = TypeAction | PokemonsAction;
const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    case GetPokemonsActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case GetPokemonsActionTypes.FETCH_POKEMONS_RESOLVE:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case GetPokemonsActionTypes.FETCH_POKEMONS_REJECT:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IinitialState) => state.pokemons.types.data;
export const getPokemonsTypesIsLoading = (state: IinitialState) => state.pokemons.types.isLoading;

export const getPokemonsData = (state: IinitialState) => state.pokemons.pokemons.data;
export const getPokemonsIsLoading = (state: IinitialState) => state.pokemons.pokemons.isLoading;

export const getPokemons = (query = {}) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: GetPokemonsActionTypes.FETCH_POKEMONS });
    try {
      const response = await req<PokemonsReq>(ConfigEndpoints.getPokemons, query);
      console.log('######### res', response);
      dispatch({
        type: GetPokemonsActionTypes.FETCH_POKEMONS_RESOLVE,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: GetPokemonsActionTypes.FETCH_POKEMONS_REJECT,
        payload: err,
      });
    }
  };
};

export const getTypesActions = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ItypesRequest>(ConfigEndpoints.getTypes, {});
      console.log('######### res', response);
      dispatch({
        type: PokemonsActionTypes.FETCH_TYPES_RESOLVE,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: PokemonsActionTypes.FETCH_TYPES_REJECT,
        payload: err,
      });
    }
  };
};

export default pokemons;
