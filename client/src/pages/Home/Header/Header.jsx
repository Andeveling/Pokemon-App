import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  setPokemonName,
  setSearched,
  setPokemonSearched,
} from "../../../redux/slices/PokemonSlice";
import { useSearchParams, Link } from "react-router-dom";
import SearchButtons from "../../../components/SearchButtons/SearchButtons";
import "./Header.css";

function Header() {
  const dispatcher = useDispatch();
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [params, setParams] = useSearchParams();

  const check = useSelector((state) => state.pokemonStore.isSearched);
  const handleInputChanges = (event) => {
    event.preventDefault();
    setPokemonSearch(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setParams({ name: pokemonSearch });
    dispatcher(setPokemonSearched(pokemonSearch));
  };

  const handleBack = () => {
    dispatcher(setPokemonName({}));
    dispatcher(setSearched(false));
    setParams();
  };
  return (
    <header>
      <img
        className='header__logo'
        alt='Logo'
        src='https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png'></img>

      {/* ACAAAA ESTA EL FILTRO */}
      {check ? (
        <button className='header__back-button' onClick={() => handleBack()}>
          Back
        </button>
      ) : null}
      <form className='form__pokemon' onSubmit={(event) => handleSubmit(event)}>
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
              handleInputChanges(event);
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
      <SearchButtons></SearchButtons>
    </header>
  );
}

export default Header;
