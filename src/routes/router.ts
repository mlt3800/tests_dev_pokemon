import express from "express"
import { PokemonController } from "../controller/PokemonController"

export const PokemonRouter = express.Router()

const pokemonController = new PokemonController()


PokemonRouter.get("/pokemon", pokemonController.gottaCatchAll)

PokemonRouter.get("/name", pokemonController.getAllName)

PokemonRouter.get("/type", pokemonController.getAllType)

PokemonRouter.get("/pokemon/types", pokemonController.getAllTypes)

PokemonRouter.get("/pages", pokemonController.getAllPages)