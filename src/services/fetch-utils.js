export async function getPokemon(name) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?name=${name}`);
  const data = await rawResponse.json();

  return data;
}