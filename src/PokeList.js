import React from 'react';
import PokePoke from './PokePoke';

export default function PokeList({ pokemons }) {
  return (<div>
    {
      pokemons.map(pokemon => < PokePoke key={`${pokemon.id}${pokemon.Pokemon}`} pokemon={pokemon}/>)
    }
  </div>);
}
