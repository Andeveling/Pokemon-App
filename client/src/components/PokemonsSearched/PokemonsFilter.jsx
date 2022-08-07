import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { useSelector } from "react-redux";

let pokemons = [];
const PokemonsFilter = () => {
  const { pokemonsRender } = useSelector((state) => state.pokemonStore);
  pokemons = pokemonsRender;

  return (
    <main className='main__container'>
      {pokemons?.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imgUrl={pokemon.imgUrl}
          typeOne={pokemon.typeOne}
          typeTwo={pokemon.typeTwo}></PokeCard>
      ))}
    </main>
  );
};

export default PokemonsFilter;
