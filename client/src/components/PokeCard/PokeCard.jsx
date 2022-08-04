import React from "react";
import "./PokeCard.css";
import { Link } from "react-router-dom";

function PokeCard({ id, name, typeOne, typeTwo, imgUrl }) {
  return (
    <Link to={`/home/${id}`}>
      <div className='pokecard__container'>
        <img className='pokecard__image' src={imgUrl} alt='PokeImage'></img>
        <span className='pokecard__name'>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        <div>
          <span className='pokecard__type'>{typeOne}</span>
          {typeTwo ? <span className='pokecard__type'>{typeTwo}</span> : <></>}
        </div>
      </div>
    </Link>
  );
}

export default PokeCard;
