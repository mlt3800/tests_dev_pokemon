import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";

const pokemonBusiness = new PokemonBusiness();
export class PokemonController {
  gottaCatchAll = async (req: Request, res: Response) => {
    try {
      const result = await pokemonBusiness.gottaCatchAll();
      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
  getAllName = async (req: Request, res: Response) => {
    try {
      const name = req.body.name;

      const resultName = await pokemonBusiness.getAllName(name);

      res.status(200).send(resultName);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
  getAllPages = async (req: Request, res: Response) => {
    try {
      const offset = req.body.offset;
      const result = await pokemonBusiness.getAllPages(offset);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
  getAllType = async (req: Request, res: Response) => {
    try {
        const type = req.body.type

        const resultByType = await pokemonBusiness.getAllType(type)
        res.status(200).send(resultByType)
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}
  
getAllTypes = async (req: Request, res: Response) => {
  try {
      const { type1, type2, offset } = req.body

      const resultTypes = await pokemonBusiness.getAllTypes(type1, type2, offset)

      res.status(200).send(resultTypes)

  } catch (error: any) {
      res.status(400).send({ error: error.message });
  }
}
}