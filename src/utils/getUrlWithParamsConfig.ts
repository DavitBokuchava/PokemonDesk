/* eslint-disable */
import config from '../config';
export interface Iquery {
  name?: string;
  offset?: number;
  limit?: number;
  id?: string | number;
}
interface IapiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface Iendpont {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

function getUrlWithParamsConfig(endpointConfig: string, params: object) {
  const { method, uri }: Iendpont = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];

  let body = {};
  const apiConfigUri: IapiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    console.log(val, 'valvalvval', acc);
    if (acc.indexOf(`{${val}}`) !== -1) {
      console.log(query[val as keyof typeof query]);
      const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
      delete query[val as keyof typeof query];
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);
  apiConfigUri.pathname = pathname;
  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = {
      ...query,
    };
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
}

export default getUrlWithParamsConfig;

///////////////////////// old \\\\\\\\\\\\\\\\\\
// import config, {Ipath,Iserver}from '../config';
// export interface Iquery {
//   name?: string;
//   offset?: number;
//   limit?: number;
//   id?:string | number;

// }

// // interface Iurl{
// //   server:Iserver;
// //   pathname:Ipath;
// //   query?:Iquery;
// // }

// function getUrlWithParamsConfig(endpontConfig: string, query: any){
//   // let query: object = {
//   //   ...queries,
//   // };
//   const url = {
//     ...config.client.server,
//     ...config.client.endpoint[endpontConfig as keyof typeof  config.client.endpoint].uri,
//     query:{},
//   };
//   const pathname = Object.keys(query).reduce((acc,val)=>{
//     console.log(val,"valvalvval",acc)
//     if(acc.indexOf(`{${val}}`) !== -1){
//       console.log(query[val])
//       const result = acc.replace(`{${val}}`,query[val]);
//       delete query[val];
//       return result
//     }
//     return acc
//   },url.pathname)
//   url.pathname = pathname;
//   url.query = {
//     ...query
//   }

//   return url;
// }

// export default getUrlWithParamsConfig;
// //reduce<A>(fn:(acc:T,curr:T,index:number,arr:T[])=>A,init:number):A;

// // interface Iclient {
// //   server: Iserver;
// //   endpoint: Iendpoint;
// // }
// // interface Iserver {
// //   protocol: string;
// //   host: string;
// // }
// // interface Iendpoint {
// //   getPokemons: Igetpokemons;
// // }
// // interface Igetpokemons {
// //   method: string;
// //   uri: Ipath;
// // }
// // interface Ipath {
// //   pathname: string;
// // }

// // interface Iconfig {
// //   client: Iclient;
// // }
