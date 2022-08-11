import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const pokemonAdapter = createEntityAdapter({
  selectId: (pokemon) => pokemon.id,
});
const initialState = pokemonAdapter.getInitialState();
export const pokemonSelector = pokemonAdapter.getSelectors();

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => "/pokemons",
      transformResponse: (response) => {
        return pokemonAdapter.setAll(initialState, response);
      },
      providesTags: ["Pokemon"],
    }),
    getPokemonId: builder.query({
      query: (id) => `/pokemons/${id}`,
    }),
    getPokemonName: builder.query({
      query: (name) => `/pokemons?name=${name}`,
    }),
    getAllTypes: builder.query({
      query: () => `/types`,
      transformResponse: (response) => response,
    }),
    addNewPokemon: builder.mutation({
      query: (body) => ({
        url: "/pokemons",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Pokemon"],
    }),
  }),
});
//pokemonApi.endpoints.getPokemonName.useQuery({ name });
export const {
  useGetAllPokemonsQuery,
  useGetPokemonIdQuery,
  useGetPokemonNameQuery,
  useGetAllTypesQuery,
  useAddNewPokemonMutation,
} = pokemonApi;

// returns the query result object
export const selectPokemonsResult = pokemonApi.endpoints.getAllPokemons.select();

// Creates memoized selector
const selectPokemonsData = createSelector(
  selectPokemonsResult,
  (PokemonsResult) => PokemonsResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllPokemons,
  selectById: selectPokemonsById,
  selectIds: selectPokemonIds,

  // Pass in a selector that returns the posts slice of state
} = pokemonAdapter.getSelectors((state) => selectPokemonsData(state) ?? initialState);
