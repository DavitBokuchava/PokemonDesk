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
  //className={s.titleName}
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="xs" className={s.titleName}>
          {nameClean}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.hp}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.special_attack}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;