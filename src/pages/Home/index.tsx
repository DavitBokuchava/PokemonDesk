import React from 'react';
import { navigate } from 'hookrouter';
import st from './Home.module.scss';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import { LinkEnum } from '../../routes';

/* eslint-disable */
// interface Ihome{
//   title?:string
// }
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
      <div className={st.wrap}>
        <div className={st.left}>
          <div style={{ display: 'block' }}>
            <Heading size="s" className={st.buttonOne}>
              Hi Pokemons
            </Heading>

            <Button
              onClick={() => navigate(LinkEnum.POKEDEX, true, null, true)}
              width="300px"
              color="red"
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
