/* eslint-disable */
import React from 'react';
import { useSelector /*useDispatch*/ } from 'react-redux';
import { A } from 'hookrouter';
import { LinkEnum } from '../../routes';
import PokemonCards from '../../components/PokemonCards';
import Heading from '../../components/Heading';
import st from './style.module.scss';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { Ipokemons, PokemonsReaquest } from '../../interfaces/pokemons';
import { Iquery } from '../../utils/getUrlWithParamsConfig';
import { getPokemonsTypes, getPokemonsTypesIsLoading } from '../../store/pokemons';
interface Ititle {
  title?: string;
}

const Pokedex: React.FC<Ititle> = ({ title }) => {
  const pokemonTypes = useSelector(getPokemonsTypes);
  const pokemonsTypesIsLoading = useSelector(getPokemonsTypesIsLoading);
  const [searchValues, setSearchValues] = React.useState<string>('');
  const debouncedValue = useDebounce(searchValues, 1000);

  const [page, setPage] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(5);
  const [attackFrom, setAttackFrom] = React.useState<string>('0');
  const [attackTo, setAttackTo] = React.useState<string>('0');
  const debouncedAttackFrom = useDebounce(attackFrom, 1000);
  const debouncedAttackTo = useDebounce(attackTo, 1000);
  const [query, setQuery] = React.useState<Iquery>({
    offset: limit * page,
    limit: limit,
    attack_from: null,
    attack_to: null,
    exp_from: null, // (опыт)
    exp_to: null,
    hp_from: null, //(жизнь)
    hp_to: null,
    defense_from: null,
    defense_to: null,
    speed_from: null,
    speed_to: null,
  });

  const { data, isloading, error } = useData<Ipokemons>('getPokemons', query, [
    debouncedValue,
    page,
    limit,
    debouncedAttackFrom,
    debouncedAttackTo,
  ]);

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues(event.target.value);
    setQuery((val: Iquery) => ({
      ...val,
      name: event.target.value,
      offset: 0,
      limit: 5,
    }));
    setPage(0);
    setLimit(5);
  };
  // const deps = () => {
  //   return Object.keys(query);
  // };

  // if (isloading) {
  //   return <div>isloading...</div>;
  // }
  if (error) {
    return <div>Error</div>;
  }
  console.log(LinkEnum.POKEMON);
  return (
    <>
      <Heading className={st.title}>
        {!isloading && data && data.total} <b>Pokemons</b>
      </Heading>
      <Heading className={st.title}>{title}</Heading>
      <input
        placeholder="attack-to"
        type="number"
        name="attackTo"
        value={attackTo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAttackTo(e.target.value);
          setQuery((val: Iquery) => ({ ...val, attack_to: e.target.value }));
        }}
      />
      <input
        placeholder="attack-from"
        type="number"
        name="attackFrom"
        value={attackFrom}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAttackFrom(e.target.value);
          setQuery((val: Iquery) => ({ ...val, attack_from: e.target.value }));
        }}
      />
      <button>AttackFrom</button>
      <div>{pokemonsTypesIsLoading ? 'loading...' : pokemonTypes?.map((el) => <div key={el}>{el}</div>)}</div>
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
          data.pokemons.map((pokemon: PokemonsReaquest) => (
            <A href={`${LinkEnum.POKEDEX}/${pokemon.id}`}>
              <PokemonCards key={pokemon.id} {...pokemon} />
            </A>
          ))}
      </div>
      {data && data.total > 0 && (
        <div>
          <button
            onClick={() => {
              setLimit((val: number) => (val === 5 ? val : val - 5));
              setPage(0);
              setQuery((val: Iquery) => ({ ...val, limit: limit > 5 ? limit - 5 : limit, offset: 0 }));
            }}>
            limit--
          </button>
          <button
            name="limitUp"
            onClick={() => {
              setLimit((val: number) => (limit * (page + 1) > data.total ? val : val + 5));
              setPage(0);
              setQuery((val: Iquery) => ({
                ...val,
                limit: limit * (page + 1) > data.total ? limit : limit + 5,
                offset: 0,
              }));
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
              setPage((val: number) => (data.total < (val + 1) * limit ? val : val + 1));
              setQuery((val: Iquery) => ({
                ...val,
                offset: data.total < (page + 1) * limit ? val.offset : page * limit,
              }));
            }}>
            next
          </button>
          <span>page{`  ${page + 1} `}</span>
        </div>
      )}
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
