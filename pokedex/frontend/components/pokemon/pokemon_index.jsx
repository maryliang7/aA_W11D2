import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render() {
    return(
      <div>
        <section className="pokedex">
          <ul>{this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}</ul>
        </section>;
        {/* <ul>
          {this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul> */}
      </div>
    );
  };
}