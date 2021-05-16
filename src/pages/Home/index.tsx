import React from 'react';
import st from './Home.module.scss';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className={st.root}>
      <Header />
      <div className={st.wrap}>
        <div className={st.left}>
          <Button onClick={() => 'Click'} />
        </div>
        <div className={st.right}>
          <Parallax />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
