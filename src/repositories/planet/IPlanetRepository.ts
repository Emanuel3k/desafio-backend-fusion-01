import { Planet } from "@/domain";

export abstract class IPlanetRepository {
  abstract create(planet: Planet): Promise<Planet>;

  abstract getAll(): Promise<Planet[]>;
}
