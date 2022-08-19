import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    pokemons: [],
    pokemonsRender: [],
    render: false,
    isLoading: false,
    isSearched: false,
    pokemonSearched: "",
    currentPage: 0,
  },
  reducers: {
    //Cargar Pokemons
    loadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
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
    setOrderPokemonsAZ: (state, action) => {
      if (!state.render) {
        const pokemonsAZ = state.pokemons.sort((pokemonA, pokemonB) => {
          if (pokemonA.name > pokemonB.name) return 1;
          if (pokemonA.name < pokemonB.name) return -1;
          return 0;
        });
        state.render = true;
        state.pokemonsRender = pokemonsAZ;
      }
      const pokemonsAZ = state.pokemonsRender.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) return 1;
        if (pokemonA.name < pokemonB.name) return -1;
        return 0;
      });
      state.render = true;
      state.pokemonsRender = pokemonsAZ;
    },
    setOrderPokemonsZA: (state, action) => {
      if (!state.render) {
        const pokemonsZA = state.pokemons.sort((pokemonA, pokemonB) => {
          if (pokemonA.name > pokemonB.name) return -1;
          if (pokemonA.name < pokemonB.name) return 1;
          return 0;
        });
        state.render = true;
        state.pokemonsRender = pokemonsZA;
      }
      const pokemonsZA = state.pokemonsRender.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) return -1;
        if (pokemonA.name < pokemonB.name) return 1;
        return 0;
      });
      state.render = true;
      state.pokemonsRender = pokemonsZA;
    },
    setOrderPokemonsAttackUp: (state, action) => {
      if (!state.render) {
        const pokemonsAttack = state.pokemons.sort((pokemonA, pokemonB) => {
          if (pokemonA.attack > pokemonB.attack) return -1;
          if (pokemonA.attack < pokemonB.attack) return 1;
          return 0;
        });
        state.render = true;
        state.pokemonsRender = pokemonsAttack;
      }
      const pokemonsAttack = state.pokemonsRender.sort((pokemonA, pokemonB) => {
        if (pokemonA.attack > pokemonB.attack) return -1;
        if (pokemonA.attack < pokemonB.attack) return 1;
        return 0;
      });
      state.render = true;
      state.pokemonsRender = pokemonsAttack;
    },
    setOrderPokemonsAttackDown: (state, action) => {
      if (!state.render) {
        const pokemonsAttack = state.pokemons.sort((pokemonA, pokemonB) => {
          if (pokemonA.attack > pokemonB.attack) return 1;
          if (pokemonA.attack < pokemonB.attack) return -1;
          return 0;
        });
        state.render = true;
        state.pokemonsRender = pokemonsAttack;
      }
      const pokemonsAttack = state.pokemonsRender.sort((pokemonA, pokemonB) => {
        if (pokemonA.attack > pokemonB.attack) return 1;
        if (pokemonA.attack < pokemonB.attack) return -1;
        return 0;
      });
      state.render = true;
      state.pokemonsRender = pokemonsAttack;
    },
    filterPokemonCustom: (state) => {
      const pokemonsCustom = state.pokemons.filter((pokemon) => pokemon.custom === true);
      state.render = true;
      state.pokemonsRender = pokemonsCustom;
    },
    filterPokemonOriginal: (state) => {
      const pokemonsOriginal = state.pokemons.filter((pokemon) => pokemon.custom !== true);
      state.render = true;
      state.pokemonsRender = pokemonsOriginal;
    },
    setRender: (state) => {
      state.pokemonsRender = state.pokemons;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = state.currentPage + action.payload;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 0;
    },
  },
  // Esta configuracion es necesaria para actualizar el estado de loading dependiendo el estado de la promesa.
});

export const {
  loadingPokemons,
  setPokemonName,
  setPokemons,
  setRender,
  setPokemonsByType,
  setOrderPokemonsAZ,
  setOrderPokemonsZA,
  setOrderPokemonsAttackUp,
  setOrderPokemonsAttackDown,
  filterPokemonCustom,
  filterPokemonOriginal,
  setSearched,
  setPokemonSearched,
  setCurrentPage,
  resetCurrentPage,
} = pokemonSlice.actions;
//Eso es lo que exporto a la store
export default pokemonSlice.reducer;
