import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    from: 0,
    to: 12,
    pokemons: [],
    isLoading: false,
    pokemon: {},
    isSearched: false,
  },
  reducers: {
    //Cargar Pokemons
    loadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
      state.isLoading = false;
    },
    setFrom: (state, action) => {
      state.from += action.payload;
    },
    setTo: (state, action) => {
      state.to += action.payload;
    },
    setPokemonName: (state, action) => {
      state.pokemon = action.payload;
      state.isLoading = false;
    },
    setSearched: (state, action) => {
      state.isSearched = action.payload;
    },
  },
});

export const { loadingPokemons, setPokemonName, setPokemons, setFrom, setSearched, setTo } =
  pokemonSlice.actions;
//Eso es lo que exporto a la store
export default pokemonSlice.reducer;
