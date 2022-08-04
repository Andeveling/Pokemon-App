import { Router } from "express";
import { getPokemons, getTypes, addNewPokemon } from "../controllers/index.js";
export const router = Router();

router.get("/pokemons", getPokemons); //All
router.get("/pokemons/:id", getPokemons); //Params
router.get("/pokemons", getPokemons); //Query
router.post("/pokemons", addNewPokemon); //Add Pokemon
router.get("/types", getTypes); //Types
