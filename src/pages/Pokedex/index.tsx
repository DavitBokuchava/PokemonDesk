import React, { useEffect, useState } from 'react';
/* eslint-disable */
//import { pokemons } from '../../pokemons';
import PokemonCards from '../../components/PokemonCards';
import Heading from '../../components/Heading';
import st from './style.module.scss';
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
  const [total, setTotal] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.pokemons);
        setPokemons(data.pokemons);
        setTotal(data.total);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  console.log(pokemons, 'pokemons');
  if (isloading) {
    return <div>isloading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <Heading className={st.title}>
        {total} <b>Pokemons</b>
      </Heading>
      <div style={{ textAlign: 'center' }}>{title}</div>
      {pokemons.map(
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
    </>
  );
};

export default Pokedex;
