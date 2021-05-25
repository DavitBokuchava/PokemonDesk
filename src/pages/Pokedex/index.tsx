/* eslint-disable */
import React from 'react';
import PokemonCards from '../../components/PokemonCards';
import Heading from '../../components/Heading';
import st from './style.module.scss';
import useData from '../../hooks/getData';
interface Istats {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: Istats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}
interface IPokedex {
  title: string;
}
interface IclassName {
  className: JSX.ElementAttributesProperty;
}

const Pokedex: React.FC<IPokedex> = ({ title }) => {
  const { data, isloading, error, page, limit, setLimit, setPage } = useData('getPokemons');

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
        {data.total} <b>Pokemons</b>
      </Heading>
      <div style={{ textAlign: 'center' }}>{title}</div>
      <div>
        {data.pokemons.map(
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
          }: IPokemon) => (
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
