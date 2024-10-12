import { CreatePlanetDTO, Planet } from "@/domain";

export abstract class IPlanetService {
  abstract create(planet: CreatePlanetDTO): Promise<Planet>;

  abstract getAll(): Promise<Planet[]>;
}
