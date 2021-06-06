export interface IstateRequest<T> {
  isLoading: boolean;
  data: null | T[] | object;
  error: null | object;
}

// export interface IstateRequestGetPokemons {
//   isLoading: boolean;
//   data: null | object;
//   error: null | object;
// }
