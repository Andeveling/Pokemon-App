import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useGetPokemonIdQuery } from "../../services/pokemonApi";
import "./PokeDetail.css";

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

let maxStats = {
  heal: 255,
  attack: 190,
  defense: 250,
  speed: 180,
};

function PokeDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPokemonIdQuery(id);

  if (error) {
    return <h1>Oh no, there was an error</h1>;
  } else if (isLoading) {
    return <Spinner></Spinner>;
  } else if (data) {
    return (
      <div className='pokedetail__container'>
        <h1 className='pokedetail__name'>
          {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          <span className='pokedetail__id'> #{data.id}</span>
        </h1>

        <div className='pokedetail__container-left'>
          <img className='pokedetail_image' src={data.imgUrl} alt='pokeImage'></img>
          <div>
            <span className='pokedetail__types' style={{ backgroundColor: color[data.typeOne] }}>
              {data.typeOne}
            </span>
            {data.typeTwo ? (
              <span className='pokedetail__types' style={{ backgroundColor: color[data.typeTwo] }}>
                {data.typeTwo}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className='pokedetail__container-right'>
          <p className='pokedetail__description'>
            This is a data get of Api for henry personal Project
          </p>
          <div className='pokedetail__stats-container'>
            <div className='pokedetail__HW'>
              <h3>
                Height: <span className='pokedetail__id'> {data.height}"</span>
              </h3>
              <h3>
                Weight: <span className='pokedetail__id'>{data.weight} lbs</span>
              </h3>
            </div>

            <ul>
              <li className='pokedetail_stat'>
                <h3>Heal Points</h3>
                <div className='pokedetail__bar'>
                  <progress min='0' max={maxStats.heal} value={data.hp.toString()}></progress>
                  <span className='number__detail'>{data.hp}</span>
                </div>
              </li>
              <li className='pokedetail_stat'>
                <h3>Attack</h3>
                <div className='pokedetail__bar'>
                  <progress min='0' max={maxStats.attack} value={data.attack.toString()}></progress>
                  <span className='number__detail'>{data.attack}</span>
                </div>
              </li>
              <li className='pokedetail_stat'>
                <h3>Defense</h3>
                <div className='pokedetail__bar'>
                  <progress
                    min='0'
                    max={maxStats.defense}
                    value={data.defense.toString()}></progress>
                  <span className='number__detail'>{data.defense}</span>
                </div>
              </li>
              <li className='pokedetail_stat'>
                <h3>Speed</h3>
                <div className='pokedetail__bar'>
                  <progress min='0' max={maxStats.speed} value={data.speed.toString()}></progress>
                  <span className='number__detail'>{data.speed}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default PokeDetail;
