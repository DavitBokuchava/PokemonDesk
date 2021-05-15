import React from 'react';
import st from './Home.module.scss';
import Header from '../../components/Header';
// import Layout from '../../components/Layout'
// import Button from '../../components/Button'

// console.log(st,"st")

const HomePage = () => {
  return (
    <div className={st.root}>
      <Header />
      {/* <Button onClick = {(event)=>console.log("Click")}/> */}
      {/* <Layout
            className = {st.contentWrap}
            >

            </Layout> */}
    </div>
  );
};
export default HomePage;
