import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { useSelector } from "react-redux";
import PokemonNoFound from "../PokemonNoFound/PokemonNoFound";

let pokemons = [];
const PokemonsFilter = () => {
  const { pokemonsRender, render } = useSelector((state) => state.pokemonStore);
  pokemons = pokemonsRender;

  let content;
  if (pokemons.length === 0 && render) {
    content = <PokemonNoFound></PokemonNoFound>;
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
};

export default PokemonsFilter;
