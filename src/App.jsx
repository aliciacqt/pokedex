import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    type: "grass",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",
    type: "fire",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",
    type: "water",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",
    type: "electrik",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
    type: "psy",
  },
];

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("Hello pokemon trainer :)");
  }, []);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  );
};

export default App;
