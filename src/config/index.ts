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
  getPokemon: Igetpokemons;
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

export const config: Iconfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon',
        },
      },
    },
  },
};

export default config;
