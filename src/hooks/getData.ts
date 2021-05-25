/* eslint-disable */
import { useState, useEffect } from 'react';
import config from '../config';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [isloading, setIsloading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(2);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (page < 0) {
      setPage(0);
    }
    if (limit < 0) {
      setLimit(10);
    }
  }, [page, limit]);
  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsloading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      console.log(url, '  url');
      try {
        const response = await req<T>(endpoint, query, page, limit); //fetch(`${url}?offset=${page}&limit=${limit}`).then(res=>res.json()) //
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
    page,
    limit,
    setLimit,
    setPage,
  };
};

export default useData;

//   setPokemons(response.pokemons);
//   setTotal(response.total);
// const [total, setTotal] = useState(0);
// const [pokemons, setPokemons] = useState([]);
