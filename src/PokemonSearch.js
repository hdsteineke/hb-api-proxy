import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';
import Spinner from './Spinner';

export default function PokemonSearch() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('vaporeon');
  const [isLoading, setIsLoading] = useState(false);


      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.

  async function load() {
    setIsLoading(true);
    const data = await getPokemon(pokemonQuery);
    setPokemonData(data.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    load();

  }, []);
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
    load();
    
    // set the loading state to true
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
  
      
  
        // put the jsonified data in state and set the loading state to false
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search for a pokemon
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <label>Pokemon:
          <input onChange={e => setPokemonQuery(e.target.value)}></input>
        </label>
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      { isLoading 
        ? <Spinner />
        : <PokemonList pokemon={pokemonData} />
      }
    </section>
  );

}
