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

export default PokemonCard;
