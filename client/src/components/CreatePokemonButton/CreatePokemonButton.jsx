import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CreatePokemonButton.css";

const CreatePokemonButton = () => {
  return (
    <>
      <p className='create__text parpadea'>Create a new Pokemon</p>
      <button className='createPokemon__button'>
        <Link to='/createpokemon'>
          <AiOutlinePlus />
        </Link>
      </button>
    </>
  );
};

export default CreatePokemonButton;
