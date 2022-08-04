import React from "react";
import PokeCard from "./PokeCard/PokeCard";
import { useSelector } from "react-redux";
import Spinner from "./Spinner/Spinner";

function PokemonSearched() {
  const { pokemon } = useSelector((state) => state.pokemonStore);
  if (!pokemon) {
    return <Spinner></Spinner>;
  } else if (pokemon.id) {
    return (
      <main className='main__container'>
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imgUrl={pokemon.imgUrl}
          typeOne={pokemon.typeOne}
          typeTwo={pokemon.typeTwo}></PokeCard>
      </main>
    );
  }
}

export default PokemonSearched;
