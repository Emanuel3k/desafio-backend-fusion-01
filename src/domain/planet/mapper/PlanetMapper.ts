import { CreatePlanetDTO, Planet } from "@/domain";
import { IMapper } from "@/utils";

export class PlanetMapper implements IMapper<Planet, CreatePlanetDTO, null> {
  fromCreate(dto: CreatePlanetDTO): Planet {
    return {
      name: dto.name,
      climate: dto.climate,
      terrain: dto.terrain,
      population: dto.population,
      starSystemId: dto.starSystemId,
    };
  }

  fromEdit(_dto: null): Partial<Planet> {
    throw new Error("Method not implemented.");
  }
}