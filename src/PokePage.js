import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemon } from './services/fetch-utils';

const PER_PAGE = 40;

export default function PokePage() {
  const [page, setPage] = useState(1);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetch() {
      const start = PER_PAGE * (page - 1) + 1;
      const end = PER_PAGE * page;

      const data = await getPokemon(start, end);

      setPokemon(data);
    }
    fetch();
  }, [page]);
}