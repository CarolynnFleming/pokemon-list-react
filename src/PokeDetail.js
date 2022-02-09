import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokeDetail() {
  const [pokemon, setPokemon] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSinglePokemon(params.id);
            
      setPokemon(data);
    }
    onLoad();
  }, [params.id]);


  function handlePokeClick() {
    window.open('pokemon');
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='poke-detail' onClick={handlePokeClick}>
        <div className='poke-data'>
          <p>{pokemon.Type1}</p>
          <p>{pokemon.Type2}</p>
          <p>{pokemon.HP}</p>
          <p>{pokemon.Attack}</p>
          <img className='poke-img' src={pokemon.PNG}/>
          <p>{pokemon.Defense}</p>
          <p>{pokemon.Speed}</p>
          <p>{pokemon.Special}</p>
          <p>{pokemon.Description}</p>
        </div>
      </div>
    </>
  );
}