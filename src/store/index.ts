/* eslint-disable */
import { combineReducers } from 'redux';
import pokemons, { IpokemonsInitialState } from './pokemons';

export interface IinitialState {
  pokemons: IpokemonsInitialState;
}

const createRootReducer = () => {
  combineReducers({
    pokemons,
  });
};
export default createRootReducer;
