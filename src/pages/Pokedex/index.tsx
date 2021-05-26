/* eslint-disable */
import React from 'react';
import PokemonCards from '../../components/PokemonCards';
import Heading from '../../components/Heading';
import st from './style.module.scss';
import useData from '../../hooks/getData';
import { Ipokemons, PokemonsReaquest } from '../../interfaces/pokemons';
interface Iquery {
  name?: string;
  offset: number;
  limit: number;
}
const Pokedex: React.FC<Ipokemons> = () => {
  const [searchValues, setSearchValues] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(5);
  const [query, setQuery] = React.useState<Iquery>({
    offset: page * limit,
    limit: limit,
  });

  const { data, isloading, error } = useData<Ipokemons>('getPokemons', query, [searchValues, page, limit]);
  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues(event.target.value);
    setQuery((val) => ({
      ...val,
      name: event.target.value,
      offset: 0,
      limit: 5,
    }));
  };

  React.useEffect(() => {
    // if (page < 0) {
    //   setPage(0);
    //  return  setQuery((val)=>({
    //     ...val,
    //     ["offset"]: 0
    //   }))
    // }
    setQuery((val) => ({
      ...val,
      ['offset']: page * limit,
    }));
  }, [page]);
  React.useEffect(() => {
    // if (limit < 0) {
    //   setLimit(2);
    //   return setQuery((val)=>({
    //     ...val,
    //     limit: 2
    //   }))

    // }
    setQuery((val) => ({
      ...val,
      limit: limit,
    }));
  }, [limit]);

  if (isloading) {
    return <div>isloading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <Heading className={st.title}>
        {!isloading && data && data.total} <b>Pokemons</b>
      </Heading>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <input
          style={{
            width: '50%',
            height: '50px',
          }}
          type="text"
          name="searchValues"
          value={searchValues}
          onChange={handleSearchValue}
        />
      </div>
      <div>
        {!isloading &&
          data &&
          data.pokemons.map((pokemon: PokemonsReaquest) => <PokemonCards key={pokemon.id} {...pokemon} />)}
      </div>
      <div>
        <button
          onClick={() => {
            setLimit((val: number) => (val === 0 ? 0 : val - 5));
            setQuery((val: Iquery) => ({ ...val, limit: limit === 0 ? 0 : limit - 5 }));
          }}>
          limit--
        </button>
        <button
          name="limitUp"
          onClick={() => {
            setLimit((val: number) => val + 5);
            setQuery((val: Iquery) => ({ ...val, limit: limit + 5 }));
          }}>
          limit++
        </button>
        <span>limit{`  ${limit}  `}</span>

        <button
          onClick={() => {
            setPage((val: number) => (val === 0 ? 0 : val - 1));
            setQuery((val: Iquery) => ({ ...val, offset: page === 0 ? 0 * limit : (page - 1) * limit }));
          }}>
          prev
        </button>
        <button
          onClick={() => {
            setPage((val: number) => val + 1);
            setQuery((val: Iquery) => ({ ...val, offset: (page + 1) * limit }));
          }}>
          next
        </button>
        <span>page{`  ${page + 1} `}</span>
      </div>
    </>
  );
};

export default Pokedex;

/* eslint-disable */
// import React from 'react';
// import PokemonCards from '../../components/PokemonCards';
// import Heading from '../../components/Heading';
// import st from './style.module.scss';
// import useData from '../../hooks/getData';
// import { Ipokemons, PokemonsReaquest } from '../../interfaces/pokemons';

// interface InameClean{
//     nameClean:PokemonsReaquest["name_clean"]
// }
// const Pokedex: React.FC<Ipokemons> = () => {
//   const { data, isloading, error, page, limit, setLimit, setPage } = useData<Ipokemons>('getPokemons');

//   console.log(data && data.pokemons, data && data.total, 'pokemons');
//   if (isloading) {
//     return <div>isloading...</div>;
//   }
//   if (error) {
//     return <div>Error</div>;
//   }
//   return (
//     <>
//       <Heading className={st.title}>
//         {!isloading && data && data.total} <b>Pokemons</b>
//       </Heading>
//       <div>
//         {!isloading &&
//           data &&
//           data.pokemons.map(
//             ({
//               name_clean,
//               abilities,
//               stats,
//               types,
//               img,
//               name,
//               base_experience,
//               height,
//               id,
//               is_default,
//               order,
//               weight,
//             }: PokemonsReaquest) => (
//               <PokemonCards
//                 key={id}
//                 nameClean ={name_clean}
//                 abilities={abilities}
//                 stats={stats}
//                 types={types}
//                 img={img}
//                 name={name}
//                 baseExperience={base_experience}
//                 height={height}
//                 id={id}
//                 isDefault={is_default}
//                 order={order}
//                 weight={weight}
//               />
//             ),
//           )}
//       </div>
//       <div>
//         <button onClick={() => setLimit((val: number) => val - 1)}>limit--</button>
//         <button onClick={() => setLimit((val: number) => val + 1)}>limit++</button>
//         <span>limit{`  ${limit}  `}</span>

//         <button onClick={() => setPage((val: number) => val - 1)}>prev</button>
//         <button onClick={() => setPage((val: number) => val + 1)}>next</button>
//         <span>page{`  ${page + 1} `}</span>
//       </div>
//     </>
//   );
// };

// export default Pokedex;
//() => setLimit((val: number) => val - 1)
//() => setLimit((val: number) => val + 1)
//onClick={() => setPage((val: number) => val - 1)
//onClick={() => setPage((val: number) => val + 1)}
// function defineButton<T>(name:string){
//     switch(name){
//       case "limitDown":
//       case "limitUp":
//         return "limit";
//       case "prevPage":
//       case "nextPage":
//         return "page";
//       default :
//         return "name"
//     }
// }
