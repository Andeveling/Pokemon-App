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
      const pokemonDB = await Pokemons.findOne({ where: { name: name } });
      if (pokemonDB) return res.json(pokemonDB);
      const pokemonByName = await PokeApiGetInfo(URL + name);
      return res.json(pokemonByName);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  /* GET POKEMON BY NAME */
  /* GET ALL POKEMONS */
  try {
    let allPokemons = await axios.all([getPokesApi(), getPokesDB()]);
    let allPokemonsFlat = allPokemons.flat(1);
    res.json(allPokemonsFlat);
  } catch (error) {
    res.json(error);
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
      return res.json({ msg: "Pokemon not found" });
    }
  } else {
    return res.json({ msg: "Pokemon not found" });
  }
  /* GET POKEMON BY ID */
}

//Post new Pokemon -> Body
export async function addNewPokemon(req, res) {
  const { name, typeOne, typeTwo, attack, defense, speed, hp, height, weight, urlImg } = req.body;
  const newPokemon = { name, typeOne, typeTwo, attack, defense, speed, hp, height, weight, urlImg };
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
      !urlImg
    ) {
      res.json({ error: "Incomplete information" });
    }
    await Pokemons.create(newPokemon);
    res.json(newPokemon);
  } catch (error) {
    res.json({ error: error.parent.detail });
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
