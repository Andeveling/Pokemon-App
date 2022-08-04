import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadingPokemons, setPokemons, setPokemonId } from "./PokemonSlice";
import axios from "axios";

export const getPokemons = () => {
  return async (dispatch, getState) => {
    dispatch(loadingPokemons());
    const response = await axios.get("http://localhost:3001/pokemons");
    const data = await response.data;
    //hacemos la consulta y disparamos para actualizar el estado
    dispatch(setPokemons({ pokemons: data }));
  };
};

export const getPokemonById = (id) => {
  return async (dispatch, getState) => {
    dispatch(loadingPokemons());
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const data = await response.data;

    //console.log(data);
    dispatch(setPokemonId(data));
  };
};
