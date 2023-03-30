const [pokemonIndex, setPokemonIndex] = useState(0);
console.log(pokemonIndex);
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

function NavBar() {
  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={handlePreviousClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNextClick}>Suivant</button>
      )}
    </div>
  );
}

export default NavBar;
