import React, { useMemo } from "react";
import PokeCard from "../PokeCard/PokeCard";
import Spinner from "../Spinner/Spinner";
import { useGetAllPokemonsQuery } from "../../services/pokemonApi";
import { useSelector, useDispatch } from "react-redux";
import { setFrom, setTo } from "../../redux/slices/PokemonSlice";
import "./PokeList.css";

function PokeList() {
  const { data: pokemons = [], error, isLoading } = useGetAllPokemonsQuery();

  const sortedPokemons = useMemo(() => {
    const sortedPokemons = pokemons.slice();
    return sortedPokemons;
  });

  const { from, to } = useSelector((state) => state.pokemonStore);
  const dispatcher = useDispatch();
  //FUNCIONES para actualizar el estado
  const pageHandler = (value) => {
    dispatcher(setFrom(value));
    dispatcher(setTo(value));
  };
  //render conditions
  if (error) {
    return <h1>Oh no, there was an error</h1>;
  } else if (isLoading) {
    return <Spinner></Spinner>;
  } else if (pokemons) {
    return (
      <React.Fragment>
        <div className='main__pagination'>
          {from <= 0 ? (
            <div></div>
          ) : (
            <button className={"pagination__button previous"} onClick={() => pageHandler(-12)}>
              Prev
            </button>
          )}
          {to > 40 ? (
            <div></div>
          ) : (
            <button className={"pagination__button next"} onClick={() => pageHandler(12)}>
              Next
            </button>
          )}
        </div>
        <main className='main__container'>
          {sortedPokemons?.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              imgUrl={pokemon.imgUrl}
              typeOne={pokemon.typeOne}
              typeTwo={pokemon.typeTwo}></PokeCard>
          ))}
        </main>
      </React.Fragment>
    );
  } else {
    return null;
  }
}

export default PokeList;
