"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRouter = void 0;
const express_1 = __importDefault(require("express"));
const PokemonController_1 = require("../controller/PokemonController");
exports.PokemonRouter = express_1.default.Router();
const pokemonController = new PokemonController_1.PokemonController();
exports.PokemonRouter.get("/pokemon", pokemonController.gottaCatchAll);
