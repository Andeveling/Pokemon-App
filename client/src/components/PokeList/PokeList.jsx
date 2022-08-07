import React, { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import Spinner from "../Spinner/Spinner";
import { selectAllPokemons } from "../../services/pokemonApi";
import { useSelector } from "react-redux";
import "./PokeList.css";

let pokemons = [];

function PokeList() {
  //const { data: pokemons = [], isLoading, isSuccess, isError, error } = useGetAllPokemonsQuery();

  pokemons = useSelector(selectAllPokemons);

  let content;
  if (pokemons.length === 0) {
    content = <Spinner></Spinner>;
  } else {
    content = pokemons?.map((pokemon) => (
      <PokeCard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        imgUrl={pokemon.imgUrl}
        typeOne={pokemon.typeOne}
        typeTwo={pokemon.typeTwo}></PokeCard>
    ));
  }

  return <main className='main__container'>{content}</main>;
}

export default PokeList;
