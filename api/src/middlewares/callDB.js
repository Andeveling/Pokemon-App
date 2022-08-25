import { Pokemons, Types } from "../models/Pokemon.js";

export async function getPokesDB() {
  try {
    const findPokemons = await Pokemons.findAll();
    return findPokemons;
  } catch (error) {
    return error;
  }
}

export async function getPokeByNameDB(name) {
  try {
    const findPokemonByName = await Pokemons.findOne({ where: { name: name } });
    return findPokemonByName;
  } catch (error) {
    return null;
  }
}

export async function getPokeByIdDB(id) {
  try {
    const findPokemonByName = await Pokemons.findOne({ where: { id: id } });
    return findPokemonByName;
  } catch (error) {
    return null;
  }
}
