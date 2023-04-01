"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonBusiness = void 0;
const PokemonDataBase_1 = require("../data/PokemonDataBase");
const pokemonDatabase = new PokemonDataBase_1.PokemonDataBase();
class PokemonBusiness {
    constructor() {
        this.gottaCatchAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield pokemonDatabase.gottaCatchAll();
                return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.PokemonBusiness = PokemonBusiness;
