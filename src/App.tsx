import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import HomePage from './pages/EmptyPage';
/* eslint-disable */
const App = () => {
  const match = useRoutes(routes);
  console.log(match);
  return match || <HomePage />;
};
export default App;
