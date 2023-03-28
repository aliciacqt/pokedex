const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0];
  // console.log(pokemon);
  return (
    <figure>
      {" "}
      {pokemon === pokemonList[0] ? (
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
        />
      ) : (
        <p>???</p>
      )}
      <figcaption>
        {pokemon === pokemonList[0] ? "Bulbasaur" : "Mew"}
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
