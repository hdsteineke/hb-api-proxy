export async function getPokemon(pokemonQuery) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?pokemonQuery=${pokemonQuery}`);
  const data = await rawResponse.json();
  console.log('data', data);

  return data;
}