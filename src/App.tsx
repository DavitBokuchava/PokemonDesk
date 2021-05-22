import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import req from './utils/request';
/* eslint-disable */
const App = () => {
  req().then((data) => console.log(data.pokemons));
  const match = useRoutes(routes);
  console.log(match);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <PageNotFound />
  );
};
export default App;
