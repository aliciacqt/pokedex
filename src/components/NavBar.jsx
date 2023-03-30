const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  const handlePreviousClick = () => {
    setPokemonIndex(
      pokemonIndex === 0 ? pokemonList.length - 1 : pokemonIndex - 1
    );
  };

  const handleNextClick = () => {
    setPokemonIndex(
      pokemonIndex === pokemonList.length - 1 ? 0 : pokemonIndex + 1
    );
  };

  if (pokemonIndex === 3) {
    alert("Pika pikachu !!!");
  }

  return (
    <nav>
      {pokemonIndex > 0 && (
        <button onClick={handlePreviousClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNextClick}>Suivant</button>
      )}
    </nav>
  );
};

export default NavBar;
