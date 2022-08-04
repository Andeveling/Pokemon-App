import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => "/pokemons",
      providesTags: ["Pokemon"],
    }),
    getPokemonId: builder.query({
      query: (id) => `/pokemons/${id}`,
    }),
    getPokemonName: builder.query({
      query: (name) => `/pokemons/${name}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonIdQuery, useGetPokemonNameQuery } = pokemonApi;
