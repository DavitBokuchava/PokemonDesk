import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configStore from './configStore';
import './index.css';
/* eslint-disable */
const store = configStore({});
interface IApp {
  App: () => JSX.Element | null;
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
