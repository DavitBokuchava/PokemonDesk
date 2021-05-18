import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../routes';
import st from './style.module.scss';
import { ReactComponent as PokemonLogo } from './assets/Logo.svg';
/* eslint-disable */
interface IMenu {
  title: string;
  link: string;
}

const Header = () => {
  const path = usePath();
  console.log(path);
  return (
    <div className={st.root}>
      <div className={st.wrap}>
        <div className={st.pokemonLogo}>
          <PokemonLogo />
        </div>
        <div className={st.menuWrap}>
          {GENERAL_MENU.map(({ title, link }: IMenu) => (
            <A
              href="#"
              key={title}
              className={cn(st.menuLink, {
                [st.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
