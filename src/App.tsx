import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import PageNotFound from './pages/PageNotFound';
/* eslint-disable */
const App = () => {
  const match = useRoutes(routes);
  console.log(match);
  return match || <PageNotFound />;
};
export default App;
