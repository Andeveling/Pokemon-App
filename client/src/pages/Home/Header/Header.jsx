import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  setPokemonName,
  setSearched,
  setPokemonSearched,
} from "../../../redux/slices/PokemonSlice";
import { useSearchParams } from "react-router-dom";
import SearchButtons from "../../../components/SearchButtons/SearchButtons";
import "./Header.css";

function Header() {
  const dispatcher = useDispatch();
  const [params, setParams] = useSearchParams();
  const [pokemon, setPokemon] = useState({ name: "" });
  const [errorsForm, setErrorsForm] = useState({});
  const check = useSelector((state) => state.pokemonStore.isSearched);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorsForm(validations(value));
    console.log(value);
    setPokemon({ [name]: value.toLowerCase() });
  };

  const validations = (e) => {
    let errors = {};
    let regexName = /[A-Za-z]$/;
    if (!regexName.test(e.trim())) {
      errors.name = "Sorry, only accepts letters. Try typing the name again!";
    }
    if (!e) errors = {};
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errorsForm).length === 0) {
      setParams({ name: pokemon.name });
      dispatcher(setPokemonSearched(pokemon.name));
    } else {
      return;
    }
  };

  const handleBack = () => {
    dispatcher(setPokemonName({}));
    dispatcher(setSearched(false));
    setParams();
    setErrorsForm({});
  };
  return (
    <>
      <header>
        <img
          className='header__logo'
          alt='Logo'
          src='https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png'></img>

        <div className='header__form-button'>
          <form className='form__pokemon' onSubmit={(e) => handleSubmit(e)}>
            <div className='header__back-container'>
              <label className='form__pokemon-label' htmlFor='search-pokemon'>
                Search by Name
              </label>
            </div>

            <div className='form__pokemon-container'>
              <input
                className='form__pokemon-input'
                name='name'
                onChange={(e) => handleChange(e)}
                id='search-pokemon'
                type='text'></input>

              <button className='form__pokemon-button' type='submit'>
                <FaSearch></FaSearch>
              </button>
              {errorsForm.name && <p className='form__error'>{errorsForm.name}</p>}
              <p className={"form__pokemon-text"}>
                Use the advanced search to explore Pokemon by type.
              </p>
            </div>
          </form>
          {check ? (
            <button className='header__back-button' onClick={() => handleBack()}>
              Back
            </button>
          ) : null}
        </div>
      </header>
      <div className='form__pokemon-buttons'>
        <SearchButtons></SearchButtons>
      </div>
    </>
  );
}

export default Header;
