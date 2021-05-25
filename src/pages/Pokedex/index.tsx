/* eslint-disable */
import React from 'react';
import PokemonCards from '../../components/PokemonCards';
import Heading from '../../components/Heading';
import st from './style.module.scss';
import useData from '../../hooks/getData';
import { Ipokemons, PokemonsReaquest } from '../../interfaces/pokemons';
interface Iquery {
  name: string;
}
const Pokedex: React.FC<Ipokemons> = () => {
  const [searchValues, setSearchValues] = React.useState<string>('');
  const [query, setQuery] = React.useState<object>({});
  const { data, isloading, error, page, limit, setLimit, setPage } = useData<Ipokemons>('getPokemons', query, [
    searchValues,
  ]);
  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues(event.target.value);
    setQuery((val: object) => ({
      ...val,
      [event.target.name]: event.target.value,
    }));
  };

  //() => setLimit((val: number) => val - 1)
  //() => setLimit((val: number) => val + 1)
  //onClick={() => setPage((val: number) => val - 1)
  //onClick={() => setPage((val: number) => val + 1)}
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
            border: 'outline',
          }}
          type="text"
          name="name"
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
        <button name="limitDown" onClick={() => setLimit((val: number) => val - 1)}>
          limit--
        </button>
        <button name="limitUp" onClick={() => setLimit((val: number) => val + 1)}>
          limit++
        </button>
        <span>limit{`  ${limit}  `}</span>

        <button name="prevPage" onClick={() => setPage((val: number) => val - 1)}>
          prev
        </button>
        <button name="nextPage" onClick={() => setPage((val: number) => val + 1)}>
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
