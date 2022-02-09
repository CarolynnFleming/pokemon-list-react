import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemon } from './services/fetch-utils';

const PER_PAGE = 40;

export default function PokePage() {
    const [page, setPage] = useState(1);
    const [pokemon, setpokemon] = useState([]);
}