import React from "react";
import { useSelector } from "react-redux";
import PokeList from "../../../components/PokeList/PokeList";
import PokemonSearched from "../../../components/PokemonSearched";
import PokemonsFilter from "../../../components/PokemonsSearched/PokemonsFilter";
import "./Main.css";

function Main() {
  const { isSearched, render } = useSelector((state) => state.pokemonStore);

  if (isSearched) {
    return <PokemonSearched></PokemonSearched>;
  } else if (render) {
    return <PokemonsFilter></PokemonsFilter>;
  } else {
    return <PokeList></PokeList>;
  }

  //return <PokeList></PokeList>;
}

export default Main;
