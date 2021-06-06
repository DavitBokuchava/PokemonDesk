// /* eslint-disable */
// import { useSelector,useDispatch }  from 'react-redux';
// import { useState, useEffect } from 'react';
// import { getPokemons, getPokemonsData,getPokemonsIsLoading } from '../store/pokemons'
// // import req from '../utils/request';

// const useData = <T>(query: object, deps: (string | number)[] = []) => {
//   const [isloading, setIsloading] = useState<boolean>(true);
//   const [error, setError] = useState<boolean>(false);
//   const [data, setData] = useState<string[] | null>(null);
//   const isloadiGetPokemons = useSelector(getPokemonsIsLoading)
//   const getDataOfPokemons = useSelector(getPokemonsData)
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPokemons(query))
//   }, deps);
//   useEffect(()=>{
//     setIsloading(isloadiGetPokemons)
//     if(isloadiGetPokemons){
//         setData(getDataOfPokemons)
//     }
//   },[isloadiGetPokemons])
//   return {
//     data,
//     isloading,
//     error,
//   };
// };

// export default useData;

// //   setPokemons(response.pokemons);
// //   setTotal(response.total);
// // const [total, setTotal] = useState(0);
// // const [pokemons, setPokemons] = useState([]);
