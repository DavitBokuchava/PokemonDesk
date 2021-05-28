/* eslint-disable */
import React from 'react';
import useData from '../../hooks/getData';
import { Ipokemons, PokemonsReaquest } from '../../interfaces/pokemons';
export interface Iparams {
  id: string;
}

const Pokemon: React.FC<Iparams> = ({ id }: Iparams) => {
  const { data } = useData<Ipokemons>(`getPokemon`, {}, [], `/${id}`);
  return (
    <>
      <div style={{ textAlign: 'center' }}>this is pokemons number {id}</div>
    </>
  );
};
// i could only got the data of pokemon
export default Pokemon;
