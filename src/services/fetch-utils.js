import { client, checkError } from './client';

export async function getPokemon(start = 1, end = 20) {
  const response = await client
    .from('pokemon')
    .select()
    .range(start, end);

  return checkError(response);
}

