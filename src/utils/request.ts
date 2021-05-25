import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
/* eslint-disable */
async function req(endpoint: string, offset: number, limit: number) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));

  return await fetch(`${uri}?offset=${offset}&limit=${limit}`).then((res) => res.json());
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
