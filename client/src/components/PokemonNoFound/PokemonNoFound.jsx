import React from "react";
import PokemonNoFoundImage from "../../assets/PokemonNoFound.png";
import "./PokemonNoFound.css";
function PokemonNoFound() {
  return (
    <div className='PokemonNoFound'>
      <h2>Pokemons No Found</h2>
      <img className='PokemonNoFoundImage' src={PokemonNoFoundImage} alt='Pokemon No found' />
    </div>
  );
}

export default PokemonNoFound;
