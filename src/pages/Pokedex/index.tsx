/* eslint-disable */
import React from 'react';
import PokemonCards from '../../components/PokemonCards';
import Heading from '../../components/Heading';
import st from './style.module.scss';
import useData from '../../hooks/getData';
import { Ipokemons, PokemonsReaquest } from '../../interfaces/pokemons';

const Pokedex: React.FC<Ipokemons> = () => {
  const { data, isloading, error, page, limit, setLimit, setPage } = useData<Ipokemons>('getPokemons');

  console.log(data && data.pokemons, data && data.total, 'pokemons');
  if (isloading) {
    return <div>isloading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <Heading className={st.title}>
        {!isloading && data && data.total} <b>Pokemons</b>
      </Heading>
      <div>
        {!isloading &&
          data &&
          data.pokemons.map(
            ({
              name_clean,
              abilities,
              stats,
              types,
              img,
              name,
              base_experience,
              height,
              id,
              is_default,
              order,
              weight,
            }: PokemonsReaquest) => (
              <PokemonCards
                key={id}
                nameClean={name_clean}
                abilities={abilities}
                stats={stats}
                types={types}
                img={img}
                name={name}
                baseExperience={base_experience}
                height={height}
                id={id}
                isDefault={is_default}
                order={order}
                weight={weight}
              />
            ),
          )}
      </div>
      <div>
        <button onClick={() => setLimit((val: number) => val - 1)}>limit--</button>
        <button onClick={() => setLimit((val: number) => val + 1)}>limit++</button>
        <span>limit{`  ${limit}  `}</span>

        <button onClick={() => setPage((val: number) => val - 1)}>prev</button>
        <button onClick={() => setPage((val: number) => val + 1)}>next</button>
        <span>page{`  ${page + 1} `}</span>
      </div>
    </>
  );
};

export default Pokedex;
