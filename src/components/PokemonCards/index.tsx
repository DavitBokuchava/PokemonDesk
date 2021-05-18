import React from 'react';
import Heading from '../Heading';
import s from './style.module.scss';
/* eslint-disable */
interface Istats {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

interface IPokemon {
  nameClean: string;
  abilities: string[];
  stats: Istats;
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

const PokemonCard: React.FC<IPokemon> = ({
  nameClean,
  abilities,
  stats,
  types,
  img,
  name,
  baseExperience,
  height,
  id,
  isDefault,
  order,
  weight,
}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="xs" className={s.titleName}>
          Charmander
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>52</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>43</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
