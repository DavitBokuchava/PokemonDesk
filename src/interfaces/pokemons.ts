/* eslint-disable */
export interface Ipokemons {
  total: number;
  pokemons: PokemonsReaquest[];
}

let pokemonData = {
  name_clean: 'caterpie',
  abilities: ['shield-dust', 'run-away'],
  stats: {
    hp: 45,
    attack: 30,
    defense: 35,
    'special-attack': 20,
    'special-defense': 20,
    speed: 45,
  },
  types: ['bug'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
  name: 'caterpie',
  base_experience: 39,
  height: 3,
  id: 10,
  is_default: true,
  order: 14,
  weight: 29,
};

export type PokemonsReaquest = typeof pokemonData;

// interface Istats {
//     hp: number;
//     attack: number;
//     defense: number;
//     special_attack: number;
//     special_defense: number;
//     speed: number;
//   }

//   interface IPokemon {
//     name_clean: string;
//     abilities: string[];
//     stats: Istats;
//     types: string[];
//     img: string;
//     name: string;
//     base_experience: number;
//     height: number;
//     id: number;
//     is_default: boolean;
//     order: number;
//     weight: number;
//   }
//   interface IPokedex {
//     title: string;
//   }
//   interface IclassName {
//     className: JSX.ElementAttributesProperty;
//   }
