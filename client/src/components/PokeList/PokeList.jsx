import PokeCard from "../PokeCard/PokeCard";
import Spinner from "../Spinner/Spinner";
import { selectAllPokemons } from "../../services/pokemonApi";
import { useSelector, useDispatch } from "react-redux";
import "./PokeList.css";

let pokemons;
function PokeList() {
  const dispatch = useDispatch();
  //const { data: pokemons = [], isLoading, isSuccess, isError, error } = useGetAllPokemonsQuery();
  // const { pokemons } = useSelector((state) => state.pokemonStore);
  let pokemons = useSelector(selectAllPokemons);
  let content;
  if (pokemons.length === 0) {
    content = <Spinner></Spinner>;
  } else {
    content = pokemons?.map((pokemon) => (
      <PokeCard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        imgUrl={pokemon.imgUrl}
        typeOne={pokemon.typeOne}
        typeTwo={pokemon.typeTwo}></PokeCard>
    ));
  }

  return <main className='main__container'>{content}</main>;
}

export default PokeList;
