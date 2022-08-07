import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    pokemons: [],
    pokemonsRender: [],
    render: false,
    isLoading: false,
    pokemon: {},
    isSearched: false,
    pokemonSearched: "",
    from: 0,
    to: 12,
  },
  reducers: {
    //Cargar Pokemons
    loadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
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
    setPokemonSearched: (state, action) => {
      state.pokemonSearched = action.payload;
      state.isSearched = true;
    },
    setPokemonsByType: (state, action) => {
      const pokemonsType = state.pokemons.filter(
        (pokemon) => pokemon.typeOne === action.payload || pokemon.typeTwo === action.payload
      );
      state.render = true;
      state.pokemonsRender = pokemonsType;
    },
  },
  // Esta configuracion es necesaria para actualizar el estado de loading dependiendo el estado de la promesa.
});

export const {
  loadingPokemons,
  setPokemonName,
  setPokemons,
  setPokemonsByType,
  setFrom,
  setSearched,
  setTo,
  setPokemonSearched,
} = pokemonSlice.actions;
//Eso es lo que exporto a la store
export default pokemonSlice.reducer;
