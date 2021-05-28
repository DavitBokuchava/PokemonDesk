/* eslint-disable */
import { useState, useEffect } from 'react';
import config from '../config';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: (string | number | number)[] = [], id: string = '') => {
  const [isloading, setIsloading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsloading(true);
      // const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      // console.log(id, '  url');
      try {
        const response = await req<T>(endpoint, query, id); //fetch(`${url}?offset=${page}&limit=${limit}`).then(res=>res.json()) //
        console.log(response);
        setData(response);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setIsloading(false);
      }
    };
    getData();
  }, deps);
  return {
    data,
    isloading,
    error,
  };
};

export default useData;

//   setPokemons(response.pokemons);
//   setTotal(response.total);
// const [total, setTotal] = useState(0);
// const [pokemons, setPokemons] = useState([]);
