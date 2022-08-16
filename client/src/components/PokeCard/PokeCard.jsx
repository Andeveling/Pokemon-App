import React from "react";
import "./PokeCard.css";
import { Link } from "react-router-dom";

const color = {
  normal: "#a4acaf",
  fighting: "#783834",
  flying: "#3dc7ef",
  poison: "#b97fc9",
  ground: "#847432",
  rock: "#564a11",
  bug: "#729f3f",
  ghost: "#7b62a3",
  steel: "#9eb7b8",
  fire: "#fd7d24",
  water: "#59bdff",
  grass: "#74993c",
  electric: "#eed535",
  psychic: "#f366b9",
  ice: "#84d1ff",
  dragon: "#f16e57",
  dark: "#3c3c3c",
  fairy: "#fdb9e9",
  unknown: "#a4acaf",
  shadow: "#313131",
};

function PokeCard({ id, name, typeOne, typeTwo, imgUrl }) {
  return (
    <Link to={`/home/${id}`}>
      <div className='pokecard__container'>
        <img className='pokecard__image' src={imgUrl} alt='PokeImage'></img>
        <span className='pokecard__name'>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        <div>
          <span className='pokecard__type' style={{ backgroundColor: color[typeOne] }}>
            {typeOne}
          </span>
          {typeTwo ? (
            <span className='pokecard__type' style={{ backgroundColor: color[typeTwo] }}>
              {typeTwo}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
}

export default PokeCard;
