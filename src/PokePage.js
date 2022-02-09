import React, { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import PokeList from './PokeList';

const PER_PAGE = 40;

export default function PokePage() {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetch() {
      const start = PER_PAGE * (page - 1) + 1;
      const end = PER_PAGE * page;

      const data = await getPokemon(start, end);

      setPokemons(data);
    }
    fetch();
  }, [page]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        
        <button onClick={() => setPage(page + 1)}
          disabled={pokemons.length < PER_PAGE}>Next Page</button>
      </div>
      <PokeList pokemons={pokemons}/>
    </>
  );
}