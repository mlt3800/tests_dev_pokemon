import BaseDataBase from "./BaseDataBase";

export class PokemonDataBase extends BaseDataBase {
  protected TABLE_NAME = "Pokemon";
  gottaCatchAll = async () => {
    try {
      const result = await PokemonDataBase.connection()
        .select("*")
        .from(this.TABLE_NAME);

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  getAllName = async (name: string) => {
    try {
      const namePokemon = await PokemonDataBase.connection.raw(`
                SELECT * FROM ${this.TABLE_NAME} WHERE (Name like "${name}%")
        `);

      return namePokemon[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  getAllPages = async (offset: number) => {
    try {
      const result = await PokemonDataBase.connection()
        .select("*")
        .from(this.TABLE_NAME)
        .offset(offset)
        .limit(7);

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  getAllTypes = async (type1: string, type2: string, offset: number) => {
    try {
      const pokemonTypes = await PokemonDataBase.connection()
        .select("*")
        .from(this.TABLE_NAME)
        .where({ type_1: type1, type_2: type2 })
        .offset(offset)
        .limit(10);
      return pokemonTypes;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  getAllType = async (type: string) => {
    try {
      const allType = await PokemonDataBase.connection.raw(`
            SELECT * FROM ${this.TABLE_NAME} WHERE type_1= "${type}" LIMIT 10
            `);
      return allType[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
