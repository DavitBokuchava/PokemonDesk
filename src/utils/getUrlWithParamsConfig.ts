import config from '../config';
// interface Iendpoint{
//     getPokemons:Igetpokemons;
// }
// interface Igetpokemons{
//     method:string;
//     uri:Ipath;
// }
// interface Ipath{
//     pathname:string;
// }

function getUrlWithParamsConfig(endpontConfig: string) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpontConfig].uri,
  };

  return url;
}

export default getUrlWithParamsConfig;
