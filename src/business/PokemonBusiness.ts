import { PokemonDataBase } from "../data/PokemonDataBase";
import { CustomError } from "../error/CustomError";

const pokemonDatabase = new PokemonDataBase();

export class PokemonBusiness {
  gottaCatchAll = async () => {
    try {
      const result = await pokemonDatabase.gottaCatchAll();
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  getAllName = async (name: string) => {
    try {
      if (!name) {
        const result = await pokemonDatabase.gottaCatchAll();
        return result;
      }

      const newName = name.toLowerCase();

      const resultName = await pokemonDatabase.getAllName(newName);

      return resultName;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  getAllPages = async (offset: number) => {
    try {
      if (!offset) {
        offset = 1;
      }

      const page = 5;

      const newOffset = page * (Number(offset) - 1);

      const result = await pokemonDatabase.getAllPages(newOffset);

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  getAllTypes = async (type1: string, type2: string, offset: number) => {
    try {
      if (!offset) {
        offset = 1;
      }
      if (!type1) {
        type1 = "";
      }
      if (!type2) {
        type2 = "";
      }

      const newType1 = type1.toLowerCase();

      const newType2 = type2.toLowerCase();

      const page = 5;

      const newOffset = page * (Number(offset) - 1);

      const resultTypes = await pokemonDatabase.getAllTypes(
        newType1,
        newType2,
        newOffset
      );

      if (resultTypes.length == 0) {
        throw new CustomError(400, "Combination not found!");
      }

      return resultTypes;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  getAllType = async (type: string) => {
    try {
      if (!type) {
        throw new CustomError(400, "Insert type");
      }
      const newType = type.toLowerCase();

      const resultByType = await pokemonDatabase.getAllType(newType);

      return resultByType;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
