/* eslint-disable */
import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object, id: string = ''): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  console.log(uri, 'uriuriruri');
  return await fetch(`${uri}${id}`).then((res) => res.json());
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
