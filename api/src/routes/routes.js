import { Router } from "express";
import { getPokemons, getTypes, addNewPokemon, getPokemonById } from "../controllers/index.js";
export const router = Router();

router.get("/pokemons", getPokemons); //All✅ and Query
router.get("/pokemons/:id", getPokemonById); //Params✅
router.post("/pokemons", addNewPokemon); //Add Pokemon
router.get("/types", getTypes); //Types
