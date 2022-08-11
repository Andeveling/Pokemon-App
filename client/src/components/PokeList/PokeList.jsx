import PokeCard from "../PokeCard/PokeCard";
import Spinner from "../Spinner/Spinner";
import { selectAllPokemons } from "../../services/pokemonApi";
import { setPokemons, setRender } from "../../redux/slices/PokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import "./PokeList.css";
import { useEffect } from "react";

let pokemons = [];
function PokeList() {
  const { pokemonsRender, render, pagination } = useSelector((state) => state.pokemonStore);
  const dispatch = useDispatch();
  pokemons = useSelector(selectAllPokemons);

  useEffect(() => {
    if (pokemons.length > 0) {
      dispatch(setPokemons(pokemons));
    }
  }),
    [pokemons];

  if (pokemons.length === 0) {
    return <Spinner></Spinner>;
  } else {
    return (
      <main className='main__container'>
        {pokemons?.slice(pagination.from, pagination.to).map((pokemon) => (
          <PokeCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imgUrl={pokemon.imgUrl}
            typeOne={pokemon.typeOne}
            typeTwo={pokemon.typeTwo}></PokeCard>
        ))}
      </main>
    );
  }
}

export default PokeList;
