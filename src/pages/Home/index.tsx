import React from 'react';
import st from './Home.module.scss';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';

const HomePage = () => {
  interface butns {
    id: string;
    width?: string;
    color?: string;
    backgroundColor?: string;
    name?: string;
  }

  const buttons: butns[] = [
    { id: '1', width: '150px', color: 'red', backgroundColor: 'yello', name: 'hi all' },
    { id: '2', width: '200px', color: 'green', backgroundColor: 'red', name: 'hi all pokemons' },
    { id: '3', width: '300px', color: 'yello', backgroundColor: 'green', name: 'hi all pokemons of the world ' },
  ];

  return (
    <div className={st.root}>
      <Header />
      <div className={st.wrap}>
        <div className={st.left}>
          <div style={{ display: 'block' }}>
            <h1>HI ALL HI</h1>
            <h1>HI ALL </h1>
            <h1>HI ALL </h1>
            <h1>HI ALL </h1>
            {buttons.map((el) => (
              <Button
                key={el.id}
                onClick={() => 'Click'}
                width={el.width}
                color={el.color}
                backgroundColor={el.backgroundColor}>
                {el.name}
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
