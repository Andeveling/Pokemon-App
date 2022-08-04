import axios from "axios";
import { Pokemons, Types } from "../models/Pokemon.js";

export async function getPokesDB() {
  try {
    const findPokemons = await Pokemons.findAll();
    return findPokemons;
  } catch (error) {
    console.log(error.message);
  }
}
