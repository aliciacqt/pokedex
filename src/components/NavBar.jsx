const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  const handleClick = (index) => {
    setPokemonIndex((pokemonIndex = index));
  };

  if (pokemonIndex === 3) {
    alert("Pika pikachu !!!");
  }

  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
