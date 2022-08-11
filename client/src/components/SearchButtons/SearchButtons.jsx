import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useGetAllTypesQuery, selectAllPokemons } from "../../services/pokemonApi";
import {
  setPokemons,
  setRender,
  setPokemonsByType,
  setOrderPokemonsAZ,
  setOrderPokemonsZA,
  setOrderPokemonsAttackUp,
  setOrderPokemonsAttackDown,
  filterPokemonCustom,
  filterPokemonOriginal,
} from "../../redux/slices/PokemonSlice";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import "./SearchButons.css";

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
  const orderPokemon = (value) => {
    dispatch(setPokemons(pokemons));
    if (value === "A-Z") return dispatch(setOrderPokemonsAZ());
    if (value === "Z-A") return dispatch(setOrderPokemonsZA());
    if (value === "ATTACKUP") return dispatch(setOrderPokemonsAttackUp());
    if (value === "ATTACKDOWN") return dispatch(setOrderPokemonsAttackDown());
    if (value === "ALL") return dispatch(setRender());
    if (value === "CUSTOM") return dispatch(filterPokemonCustom());
    if (value === "ORIGINAL") return dispatch(filterPokemonOriginal());
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
      <button className='buttonsFilter__button' onClick={() => orderPokemon("CUSTOM")}>
        custom
      </button>
      <button className='buttonsFilter__button' onClick={() => orderPokemon("ORIGINAL")}>
        original
      </button>
      <button className='buttonsFilter__button' onClick={() => orderPokemon("A-Z")}>
        A-Z
        <BiCaretUp />
      </button>
      <button className='buttonsFilter__button' onClick={() => orderPokemon("Z-A")}>
        Z-A
        <BiCaretDown />
      </button>
      <button className='buttonsFilter__button' onClick={() => orderPokemon("ATTACKUP")}>
        Attack
        <BiCaretUp />
      </button>
      <button className='buttonsFilter__button' onClick={() => orderPokemon("ATTACKDOWN")}>
        Attack
        <BiCaretDown />
      </button>
      <button className='buttonsFilter__button' onClick={() => orderPokemon("ALL")}>
        All
      </button>
    </div>
  );
};

export default SearchButtons;
