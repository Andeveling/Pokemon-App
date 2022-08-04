import React from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setPokemonName, setSearched } from "../../../redux/slices/PokemonSlice";
import { useGetAllPokemonsQuery } from "../../../services/pokemonApi";
import "./Header.css";

function Header() {
  const dispatcher = useDispatch();
  const pokemons = useGetAllPokemonsQuery().data;
  const [pokemonSearch, setPokemonSearch] = useState("");
  const check = useSelector((state) => state.pokemonStore.isSearched);

  const handlerInputChanges = (event) => {
    event.preventDefault();
    setPokemonSearch(event.target.value.trim().toLowerCase());
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    async function getDataPokemon(pokemon) {
      try {
        const response = axios.get(`http://localhost:3001/pokemons/${pokemon}`);
        const dataPoke = (await response).data;
        return dataPoke;
      } catch (error) {
        console.log(error.message);
      }
    }
    const dataPoke = await getDataPokemon(pokemonSearch);
    dispatcher(setPokemonName(dataPoke));
    dispatcher(setSearched(true));
    //event.currentTarget.reset();
  };
  const handlerBack = () => {
    dispatcher(setPokemonName({}));
    dispatcher(setSearched(false));
  };
  return (
    <header>
      <img
        className='header__logo'
        alt='Logo'
        src='https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png'></img>

      {/* ACAAAA ESTA EL FILTRO */}
      {check ? (
        <button className='header__back-button' onClick={() => handlerBack()}>
          Back
        </button>
      ) : null}
      <form className='form__pokemon' onSubmit={(event) => handlerSubmit(event)}>
        <div className='header__back-container'>
          <label className='form__pokemon-label' htmlFor='search-pokemon'>
            Search by Name or Number
          </label>
        </div>

        <div className='form__pokemon-container'>
          <input
            className='form__pokemon-input'
            name='name'
            onChange={(event) => {
              handlerInputChanges(event);
            }}
            id='search-pokemon'
            type='text'></input>

          <button className='form__pokemon-button' type='submit'>
            <FaSearch></FaSearch>
          </button>
          <p className={"form__pokemon-text"}>
            Use the advanced search to explore Pokemon by type.
          </p>
        </div>
      </form>
    </header>
  );
}

export default Header;
