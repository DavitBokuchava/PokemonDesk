/* eslint-disable */
import React from 'react';
import useData from '../../hooks/getData';
import { Ipokemons, PokemonsReaquest } from '../../interfaces/pokemons';

import { Iquery } from '../../utils/getUrlWithParamsConfig';
// export interface Iparams {
//   id: string;
// }

const Pokemon: React.FC<Iquery> = ({ id }: Iquery) => {
  const { data } = useData<Ipokemons>(`getPokemon`, { id });
  console.log(data?.name);
  return (
    <>
      <div style={{ textAlign: 'center' }}>this is pokemon's name {data?.name}</div>
    </>
  );
};
// i could only got the data of pokemon
export default Pokemon;
