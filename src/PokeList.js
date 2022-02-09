import React from 'react';
import PokePoke from './PokePoke';

export default function PokeList({ pokemons }) {
  return (<div className='poks'>
    {
      pokemons.map(pokemon => < PokePoke key={`${pokemon.id}${pokemon.Pokemon}`} pokemon={pokemon}/>)
    }
  </div>);
}
