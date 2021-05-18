import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/EmptyPage';
/* eslint-disable */
interface IGENERAL_MENU {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}
export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}
export const GENERAL_MENU: IGENERAL_MENU[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <EmptyPage title="Pokedex" />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

interface Imenu {
  [n: string]: () => JSX.Element;
}
const routes = GENERAL_MENU.reduce((acc: Imenu, item: IGENERAL_MENU) => {
  acc[item.link] = item.component;
  return acc;
}, {});
export default routes;
