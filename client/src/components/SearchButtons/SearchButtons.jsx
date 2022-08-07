import React from "react";
import { useGetAllTypesQuery, selectAllPokemons } from "../../services/pokemonApi";
import "./SearchButons.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setPokemons, setPokemonsByType } from "../../redux/slices/PokemonSlice";
import { useState } from "react";

let pokemons = [];
const SearchButtons = () => {
  const dispatch = useDispatch();
  const { pokemonsRender } = useSelector((state) => state.pokemonStore);
  pokemons = useSelector(selectAllPokemons);
  const { currentData } = useGetAllTypesQuery();

  const filterPokemon = (type) => {
    dispatch(setPokemons(pokemons));
    dispatch(setPokemonsByType(type));
  };

  return (
    <div className='buttonsFilter_container'>
      {currentData?.map((type) => (
        <button
          onClick={() => {
            filterPokemon(type.name);
          }}
          className='buttonsFilter__button'
          key={type.id}>
          {type.name}
        </button>
      ))}
    </div>
  );
};

export default SearchButtons;
