export async function getPokemon(pokemonQuery) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?pokemonQuery=${pokemonQuery}`);
  const data = await rawResponse.json();

  return data;
}


export async function getYelpResults(yelpQuery) {
  const rawResponse = await fetch(`/.netlify/functions/yelp?yelpQuery=${yelpQuery}`);
  const data = await rawResponse.json();
  console.log('YelpFetchData', data);

  return data;
}