import React from 'react';
/* eslint-disable */
import { pokemons } from '../../pokemons';
import PokemonCards from '../../components/PokemonCards';

// interface Istats{
//     hp: number;
//     attack: number;
//     defense: number;
//     special_attack: number;
//     special_defense: number;
//     speed: number;
// }

// interface IPokemon{
//     name_clean:string;
//     abilities:string[];
//     stats:Istats;
//     types:string[];
//     img:string;
//     name:string;
//     base_experience:number;
//     height:number;
//     id:number;
//     is_default:boolean;
//     order:number;
//     weight:number;

// }

const Pokedex = () => {
  return (
    <div>
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
    </div>
  );
};

export default Pokedex;
