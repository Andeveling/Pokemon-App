import React, { useEffect } from "react";
import PokeList from "../../../components/PokeList/PokeList";
import { pokemonApi } from "../../../services/pokemonApi";
import PokemonSearched from "../../../components/PokemonSearched";
import "./Main.css";
import { useSelector } from "react-redux";

function Main() {
  const { isSearched } = useSelector((state) => state.pokemonStore);

  if (isSearched) {
    return <PokemonSearched></PokemonSearched>;
  } else {
    return <PokeList></PokeList>;
  }
}

export default Main;
