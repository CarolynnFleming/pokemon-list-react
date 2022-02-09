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
}