import PokeCard from "../PokeCard/PokeCard";
import Spinner from "../Spinner/Spinner";
import { selectAllPokemons } from "../../services/pokemonApi";
import { setPokemons, setCurrentPage } from "../../redux/slices/PokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./PokeList.css";

let pokemondata = [];
function PokeList() {
  const { currentPage } = useSelector((state) => state.pokemonStore);
  const dispatch = useDispatch();
  pokemondata = useSelector(selectAllPokemons);
  /* PAGINATION */

  const paginationPokemon = () => {
    return pokemondata.slice(currentPage, currentPage + 12);
  };
  /* PAGINATION */
  const next = () => {
    dispatch(setCurrentPage(12));
  };
  const prev = () => {
    dispatch(setCurrentPage(-12));
  };
  /* PAGINATION */
  useEffect(() => {
    if (pokemondata.length > 0) {
      dispatch(setPokemons(pokemondata));
    }
  }),
    [pokemondata];

  let content;
  if (pokemondata.length === 0) {
    content = <Spinner></Spinner>;
  } else {
    content = paginationPokemon()
      ?.slice()
      .map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imgUrl={pokemon.imgUrl}
          typeOne={pokemon.typeOne}
          typeTwo={pokemon.typeTwo}></PokeCard>
      ));
  }

  return (
    <>
      <div className='pagination'>
        {currentPage > 11 ? (
          <button onClick={prev} className='pagination__button pagination__button-left'></button>
        ) : (
          <div></div>
        )}
        {currentPage <= pokemondata.length - 12 ? (
          <button onClick={next} className='pagination__button pagination__button-right'></button>
        ) : (
          <div></div>
        )}
      </div>
      <main className='main__container'>{content}</main>
    </>
  );
}

export default PokeList;
