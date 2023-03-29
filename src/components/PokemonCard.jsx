import PropTypes from "prop-types";

function PokemonCard({ pokemonList }) {
  const pokemon = pokemonList[0];
  return (
    <figure>
      {pokemon === pokemonList[0] ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
