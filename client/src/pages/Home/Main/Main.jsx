import React from "react";
import { useSelector } from "react-redux";
import PokeList from "../../../components/PokeList/PokeList";
import PokemonSearched from "../../../components/PokemonSearched/PokemonSearched";
import PokemonsFilter from "../../../components/PokemonsSearched/PokemonsFilter";
import "./Main.css";

function Main() {
  const { isSearched, render } = useSelector((state) => state.pokemonStore);

  if (isSearched) {
    return <PokemonSearched/>;
  } else if (render) {
    return <PokemonsFilter/>;
  } else {
    return <PokeList/>;
  }

}

export default Main;
