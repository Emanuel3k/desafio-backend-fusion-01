import { CreatePlanetDTO, Planet } from "@/domain";

export abstract class IPlanetService {
  abstract create(planet: CreatePlanetDTO): Promise<Planet>;

  abstract getAll(): Promise<Planet[]>;
  
  abstract getById(id: string): Promise<Planet | null>;
  
  abstract deleteById(id: string): Promise<void>;
}
