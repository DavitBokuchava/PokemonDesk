/* eslint-disable */
import req from '../utils/request';
import { ConfigEndpoints } from '../utils/request';
import { Dispatch } from 'redux';
import { ItypesRequest } from '../interfaces/pokemons';
import { IstateRequest } from '../interfaces/index';
import { IinitialState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}
interface TypeAction {
  type: PokemonsActionTypes;
  payload?: string[];
}
export interface IpokemonsInitialState {
  types: IstateRequest<string>;
}
const initialState: IpokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};
type ActionTypes = TypeAction;
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
    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IinitialState) => state.pokemons.types.data;
export const getPokemonsTypesIsLoading = (state: IinitialState) => state.pokemons.types.isLoading;
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
