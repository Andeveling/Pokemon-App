import axios from "axios";
import { Pokemons, Types } from "../models/Pokemon.js";
import { getPokesApi, PokeApiGetInfo } from "../middlewares/callApi.js";
import { getPokesDB, getPokeByNameDB, getPokeByIdDB } from "../middlewares/callDB.js";
const URL = `https://pokeapi.co/api/v2/pokemon/`;
//Get all -> ?

export async function getPokemons(req, res) {
  /* GET POKEMON BY NAME */
  const { name } = req.query;
  if (name) {
    try {
      const pokemonDB = await getPokeByNameDB(name);
      if (pokemonDB) return res.json(pokemonDB);
      const pokemonByName = await PokeApiGetInfo(URL + name);
      return res.json(pokemonByName);
    } catch (error) {
      return res.status(404).json(error);
    }
  }
  /* GET POKEMON BY NAME */
  /* GET ALL POKEMONS */
  try {
    let allPokemons = await axios.all([getPokesApi(), getPokesDB()]);
    let allPokemonsFlat = allPokemons.flat(1);
    res.json(allPokemonsFlat);
    return;
  } catch (error) {
    res.json(error);
    return;
  }
  /* GET ALL POKEMONS */
}

export async function getPokemonById(req, res) {
  /* GET POKEMON BY ID */
  const { id } = req.params;
  const pokemonInDB = await getPokeByIdDB(id);
  if (pokemonInDB) return res.json(pokemonInDB);

  if (id && id % 1 === 0) {
    try {
      const pokemonByID = await PokeApiGetInfo(URL + id);
      return res.json(pokemonByID);
    } catch (error) {
      return res.status(404).json(error);
    }
  } else {
    return res.status(404).json(error);
  }
  /* GET POKEMON BY ID */
}

//Post new Pokemon -> Body
export async function addNewPokemon(req, res) {
  const { name, typeOne, typeTwo, attack, defense, speed, hp, height, weight, imgUrl } = req.body;
  const newPokemon = { name, typeOne, typeTwo, attack, defense, speed, hp, height, weight, imgUrl };
  try {
    if (
      !name ||
      !typeOne ||
      !attack ||
      !defense ||
      !speed ||
      !hp ||
      !height ||
      !weight ||
      !imgUrl
    ) {
      return res.json({ error: "Incomplete information" });
    }

    await Pokemons.create(newPokemon);
    res.status(200).json(newPokemon);
    return;
  } catch (error) {
    res.json(error);
    return;
  }
}

//Get all pokemons type
export async function getTypes(req, res) {
  try {
    const request = await axios.get(`https://pokeapi.co/api/v2/type`);
    const data = await request.data.results;
    for (const typeUrl of data) {
      const exist = await Types.findOne({ where: { name: typeUrl.name } });
      if (exist) return res.json(await Types.findAll());
      await Types.create({ name: typeUrl.name });
    }
    res.json(await Types.findAll());
  } catch (error) {
    res.json(error);
  }
}
