import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useGetPokemonIdQuery } from "../../services/pokemonApi";
import "./PokeDetail.css";

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
            <span className='pokedetail__types'>{data.typeOne}</span>
            {data.typeTwo ? <span className='pokedetail__types'>{data.typeTwo}</span> : <></>}
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
                <progress min='0' max={maxStats.heal} value={data.hp.toString()}></progress>
              </li>
              <li className='pokedetail_stat'>
                <h3>Attack</h3>
                <progress min='0' max={maxStats.attack} value={data.attack.toString()}></progress>
              </li>
              <li className='pokedetail_stat'>
                <h3>Defense</h3>
                <progress min='0' max={maxStats.defense} value={data.defense.toString()}></progress>
              </li>
              <li className='pokedetail_stat'>
                <h3>Speed</h3>
                <progress min='0' max={maxStats.heal} value={data.speed.toString()}></progress>
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
