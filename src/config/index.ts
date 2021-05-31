export interface Iclient {
  server: Iserver;
  endpoint: Iendpoint;
}
export interface Iserver {
  protocol: string;
  host: string;
}
export interface Iendpoint {
  getPokemons: Igetpokemons;
  getPokemon: Igetpokemons;
}
export interface Igetpokemons {
  method: string;
  uri: Ipath;
}
export interface Ipath {
  pathname: string;
}

export interface Iconfig {
  client: Iclient;
}

export const config = {
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
          pathname: '/api/v1/pokemon/{id}',
        },
      },
    },
  },
};

export default config;
