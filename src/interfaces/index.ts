export interface IstateRequest<T> {
  isLoading: boolean;
  data: null | T[] | object;
  error: null | object;
}
