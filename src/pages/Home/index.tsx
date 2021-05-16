import React from 'react';
import st from './Home.module.scss';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';

const HomePage = () => {
  interface butns {
    id: number;
    button: string | null;
    name?: any;
  }

  const buttons: butns[] = [
    { id: 1, button: st.buttonOne, name: 'hi all' },
    { id: 2, button: st.buttonTwo, name: 'hi all pokemons' },
    { id: 3, button: st.buttonThree, name: 'hi all pokemons of the world ' },
  ];

  return (
    <div className={st.root}>
      <Header />
      <div className={st.wrap}>
        <div className={st.left}>
          <div style={{ display: 'block' }}>
            <h1>HI ALL </h1>
            {buttons.map((el) => (
              <Button key={el.id} onClick={() => 'Click'} classname={el.button}>
                {/* See Pokemons */}
              </Button>
            ))}
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
