import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosPokemons, pokemonSelectors } from "../../redux/slices/PokemonTestSlice";

function TestRuteAsyncThunk() {
  const dispatcher = useDispatch();
  const total = useSelector(pokemonSelectors.selectTotal);
  const allPokes = useSelector(pokemonSelectors.selectAll);
  const pokeById = useSelector((state) => pokemonSelectors.selectById(state, 10));
  const entities = useSelector(pokemonSelectors.selectEntities);
  const Ids = useSelector(pokemonSelectors.selectIds);

  //console.log(total);
  // console.log(allPokes);
  //console.log(pokeById);
  //console.log(Ids);

  useEffect(() => {
    dispatcher(axiosPokemons());
  }, []);

  return <div>TestRuteAsyncThunk</div>;
}

export default TestRuteAsyncThunk;
