/* import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeCard from "../PokeCard/PokeCard";
import Spinner from "../Spinner/Spinner";
import { getPokemons } from "../../redux/slices/thunks";
import { setFrom, setTo } from "../../redux/slices/PokemonSlice";
import "./PokeList.css";

function PokeList() {
  const dispatcher = useDispatch();
  const { pokemons = [], isLoading, from, to } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatcher(getPokemons());
  }, []);

  const pageHandler = (value) => {
    dispatcher(setFrom(value));
    dispatcher(setTo(value));
  };

  if (isLoading) return <Spinner></Spinner>;
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
        {pokemons.slice(from, to).map((pokemon) => (
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
}

export default PokeList;
 */
