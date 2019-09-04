import React from 'react';
import { Link } from 'react-router-dom';

const pokemonIndexItem = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <li key={pokemon.id}> {pokemon.name} <img src={pokemon.image_url}></img></li>
    </Link>
  );
};

export default pokemonIndexItem;