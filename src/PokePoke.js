import React from 'react';
import { Link } from 'react-router-dom';

export default function PokePoke({ pokemon }) {
  return (
    <Link to={`/detail/${pokemon.id}`}>
      <div className='pokemon-mon'>
        <p>{pokemon.Pokemon}</p>
        <img className='pokemon-img' src={pokemon.GIF}/>
      </div>
    </Link>
  );
}
