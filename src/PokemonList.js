import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(({ pokebase, url_image, hp, ability_1 }, i) =>
        <div key={pokebase + ability_1 + i}>
          <h3>{pokebase}</h3>
          <img src={url_image} />
          <p>hp: {hp}</p>
          <p>special attack: 1: {ability_1}</p>

        </div> 
      )}
    </div>
  );
}
