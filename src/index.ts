import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
/* eslint-disable */
interface IApp {
  App: () => JSX.Element | null;
}

ReactDom.render(React.createElement(App), document.getElementById('root'));
