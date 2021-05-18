import React from 'react';
import { navigate } from 'hookrouter';
import st from './Home.module.scss';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import { LinkEnum } from '../../routes';

/* eslint-disable */
const HomePage = () => {
  interface butns {
    id: string;
    width?: string;
    color?: string;
    backgroundColor?: string;
    name?: string;
  }

  return (
    <div className={st.root}>
      <Header />
      <div className={st.wrap}>
        <div className={st.left}>
          <div style={{ display: 'block' }}>
            <Heading size="72px">avoe</Heading>

            <Button
              onClick={() => navigate(LinkEnum.POKEDEX, true, null, true)}
              width="300px"
              color="white"
              backgroundColor="blue">
              SEE POKEMONS
            </Button>
          </div>
        </div>
        <div className={st.right}>
          <Parallax />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
