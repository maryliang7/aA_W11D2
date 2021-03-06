import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { receiveAllPokemon, requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  receiveAllPokemon: (pokemon) => dispatch(receiveAllPokemon(pokemon)),
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);