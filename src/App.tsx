import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
// import "./index.css"
const App = () => {
  return (
    <>
      <div className={cn(s.appscss)}>Hi All</div>
      <div className="indexstyle">CSS</div>
    </>
  );
};
export default App;
