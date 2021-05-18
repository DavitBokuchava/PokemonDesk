import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/EmptyPage';
/* eslint-disable */
interface IGENERAL_MENU {
  title: string;
  link: string;
  component: () => JSX.Element;
}
export const GENERAL_MENU: IGENERAL_MENU[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <EmptyPage title="Pokedex" />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
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
