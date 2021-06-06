/* eslint-disable */
import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
// import {Iquery} from './getUrlWithParamsConfig'

export enum ConfigEndpoints {
  getPokemons = 'getPokemons',
  getPokemon = 'getPokemon',
  getTypes = 'getTypes',
}
interface Ioptions {
  method: string;
  body?: string;
}
interface IgetUrlWithParamsConfig {
  method: string;
  uri: Partial<URL>; //special generic
  body: object;
}

async function req<T>(endpoint: string, query: object): Promise<T> {
  const { method, uri, body }: IgetUrlWithParamsConfig = getUrlWithParamsConfig(endpoint, query);
  const options: Ioptions = {
    method,
  };

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  console.log(uri, 'uriuriruri');
  return await fetch(Url.format(uri), options).then((res) => res.json());
}

export default req;

// import Url from 'url';

// function req(){

//     const uri = Url.format({
//         protocol:'https',
//         host:'zarmarathon.com',
//         query:{
//             name:'Zar'
//         }
//     })
//     return uri;
// }

// export default req;

// import Url from 'url';
// import getUrlWithParamsConfig from './getUrlWithParamsConfig';
// import {Iquery} from './getUrlWithParamsConfig'

// async function req<T>(endpoint: string, query: Iquery): Promise<T> {
//   const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
//   console.log(uri, 'uriuriruri');
//   return await fetch(uri).then((res) => res.json());
// }

// export default req;
