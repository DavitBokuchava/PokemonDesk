/* eslint-disable */
export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}
interface TypeAction {
  type: PokemonsActionTypes;
  payload?: string[];
}
const initialState = {
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

export const getTypesActions = () => {
  return async (dispatch) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
  };
};

export default pokemons;
