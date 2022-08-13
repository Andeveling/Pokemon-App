import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { useSelector, useDispatch } from "react-redux";
import PokemonNoFound from "../PokemonNoFound/PokemonNoFound";
import { setCurrentPage } from "../../redux/slices/PokemonSlice";

let pokemons = [];
const PokemonsFilter = () => {
  const { pokemonsRender, render, currentPage } = useSelector((state) => state.pokemonStore);
  pokemons = pokemonsRender;
  const dispatch = useDispatch();
  const paginationPokemon = () => {
    return pokemons.slice(currentPage, currentPage + 12);
  };

  let content;
  if (pokemons.length === 0 && render) {
    content = <PokemonNoFound></PokemonNoFound>;
  } else {
    content = paginationPokemon()?.map((pokemon) => (
      <PokeCard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        imgUrl={pokemon.imgUrl}
        typeOne={pokemon.typeOne}
        typeTwo={pokemon.typeTwo}></PokeCard>
    ));
  }

  /* PAGINATION */

  const next = () => {
    dispatch(setCurrentPage(12));
  };
  const prev = () => {
    dispatch(setCurrentPage(-12));
  };
  /* PAGINATION */
  return (
    <>
      <div className='pagination'>
        {currentPage > 11 ? (
          <button onClick={prev} className='pagination__button pagination__button-left'></button>
        ) : (
          <div></div>
        )}
        {currentPage <= pokemons.length - 13 ? (
          <button onClick={next} className='pagination__button pagination__button-right'></button>
        ) : (
          <div></div>
        )}
      </div>
      <main className='main__container'>{content}</main>;
    </>
  );
};

export default PokemonsFilter;
