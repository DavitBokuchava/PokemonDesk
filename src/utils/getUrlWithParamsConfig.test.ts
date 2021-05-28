import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfi', () => {
  test('mentioned function must pass two arguments "getPokemons" and an ampty object, it would return object with property of url, hostname and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {
          name: 'Pikachu',
        },
      },
      body: {},
    });
  });
});
