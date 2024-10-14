import { Planet } from "@/domain";

export abstract class IPlanetRepository {
  abstract create(planet: Planet): Promise<Planet>;

  abstract getAll(): Promise<Planet[]>;

  abstract getById(id: string): Promise<Planet | null>;
  
  abstract deleteById(id: string): Promise<void>;
}
