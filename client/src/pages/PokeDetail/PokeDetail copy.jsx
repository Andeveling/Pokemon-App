import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { getPokemonById } from "../../redux/slices/thunks";
import "./PokeDetail.css";

let maxStats = {
  heal: 255,
  attack: 190,
  defense: 250,
  speed: 180,
};

function PokeDetail() {
  const { id } = useParams();
  const dispatcher = useDispatch();

  useEffect(() => {
    const act = async () => {
      const act2 = await dispatcher(getPokemonById(id));
    };
    act();
  }, []);

  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const pokemon = useSelector((state) => state.pokemons.pokemon);
  console.log(pokemon);
  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className='pokedetail__container'>
      <h1 className='pokedetail__name'>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        <span className='pokedetail__id'> #{id}</span>
      </h1>

      <div className='pokedetail__container-left'>
        <img className='pokedetail_image' src={pokemon.imgUrl} alt='pokeImage'></img>
        <div>
          <span className='pokedetail__types'>{pokemon.typeOne}</span>
          {pokemon.typeTwo ? <span className='pokedetail__types'>{pokemon.typeTwo}</span> : <></>}
        </div>
      </div>

      <div className='pokedetail__container-right'>
        <p className='pokedetail__description'>
          This is a pokemon get of Api for henry personal Project
        </p>
        <div className='pokedetail__stats-container'>
          <div className='pokedetail__HW'>
            <h3>
              Height: <span className='pokedetail__id'> {pokemon.height}"</span>
            </h3>
            <h3>
              Weight: <span className='pokedetail__id'>{pokemon.weight} lbs</span>
            </h3>
          </div>

          <ul>
            <li className='pokedetail_stat'>
              <h3>Heal Points</h3>
              <progress min='0' max={maxStats.heal} value={pokemon.hp.toString()}></progress>
            </li>
            <li className='pokedetail_stat'>
              <h3>Attack</h3>
              <progress min='0' max={maxStats.attack} value={pokemon.attack.toString()}></progress>
            </li>
            <li className='pokedetail_stat'>
              <h3>Defense</h3>
              <progress
                min='0'
                max={maxStats.defense}
                value={pokemon.defense.toString()}></progress>
            </li>
            <li className='pokedetail_stat'>
              <h3>Speed</h3>
              <progress min='0' max={maxStats.heal} value={pokemon.speed.toString()}></progress>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;
