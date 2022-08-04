import axios from "axios";
import { Pokemons, Types } from "../models/Pokemon.js";
import { getPokesApi, PokeApiGetInfo } from "../middlewares/callApi.js";
import { getPokesDB } from "../middlewares/callDB.js";
const URL = `https://pokeapi.co/api/v2/pokemon/`;
//Get all -> ?
export async function getPokemons(req, res) {
  const { name } = req.query;
  const { id } = req.params;
  const { page } = req.body;
  /* GET POKEMON BY NAME */
  if (name) {
    try {
      const pokemonByName = await PokeApiGetInfo(URL + name);
      res.json(pokemonByName);
    } catch (error) {
      res.json(error);
    }
  }
  /* GET POKEMON BY NAME */

  /* GET POKEMON BY ID */
  if (id) {
    try {
      if (id) {
        const pokemonByID = await PokeApiGetInfo(URL + id);
        res.json(pokemonByID);
      }
    } catch (error) {
      res.json(error);
    }
  }
  /* GET POKEMON BY ID */

  /* GET ALL POKEMONS */
  try {
    let allPokemons = await axios.all([getPokesApi(), getPokesDB()]);
    let allPokemonsFlat = allPokemons.flat(1);
    res.json(allPokemonsFlat);
  } catch (error) {
    console.log(error.message);
  }
  /* GET ALL POKEMONS */
}

//Post new Pokemon -> Body
export const addNewPokemon = async (req, res) => {};
//Get all pokemons type
export const getTypes = async (req, res) => {};
