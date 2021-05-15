import React from 'react';
import st from './style.module.scss';
import { ReactComponent as PokemonLogo } from './assets/Logo.svg';

interface IMenu {
  id: number;
  values: string;
  link: string;
}
const MENU: IMenu[] = [
  { id: 1, values: 'Home', link: '#' },
  { id: 2, values: 'Pokédex', link: '#' },
  {
    id: 3,
    values: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    values: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <div className={st.root}>
      <div className={st.wrap}>
        <div className={st.pokemonLogo}>
          <PokemonLogo />
        </div>
        <div className={st.menuWrap}>
          {MENU.map(({ values, link, id }) => (
            <a href="#" key={id} className={st.menuLink}>
              {values}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
