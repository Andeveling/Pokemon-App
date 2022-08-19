import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { useGetPokemonNameQuery } from "../../services/pokemonApi";

function PokemonSearched() {
  const { pokemonSearched } = useSelector((state) => state.pokemonStore);
  const {
    data: dataPoke,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPokemonNameQuery(pokemonSearched);

  let content;
  if (isLoading) {
    content = <Spinner></Spinner>;
  } else if (isSuccess) {
    content = (
      <PokeCard
        key={dataPoke.id}
        id={dataPoke.id}
        name={dataPoke.name}
        imgUrl={dataPoke.imgUrl}
        typeOne={dataPoke.typeOne}
        typeTwo={dataPoke.typeTwo}></PokeCard>
    );
  } else if (isError) {
    content = <h1>{pokemonSearched} is not a Pokemon</h1>;
  }

  return <main className='main__container'>{content}</main>;
}

export default PokemonSearched;
