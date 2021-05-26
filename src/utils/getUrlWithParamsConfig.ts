/* eslint-disable */
import config from '../config';

interface Iclient {
  server: Iserver;
  endpoint: Iendpoint;
}
interface Iserver {
  protocol: string;
  host: string;
}
interface Iendpoint {
  getPokemons: Igetpokemons;
}
interface Igetpokemons {
  method: string;
  uri: Ipath;
}
interface Ipath {
  pathname: string;
}

interface Iconfig {
  client: Iclient;
}

function getUrlWithParamsConfig(endpontConfig: string, queries: object) {
  let query: object = {
    ...queries,
  };
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpontConfig].uri,
    query,
  };

  return url;
}

export default getUrlWithParamsConfig;
