export interface IstateRequest<T> {
  isLoading: boolean;
  data: null | T[];
  error: null | object;
}
