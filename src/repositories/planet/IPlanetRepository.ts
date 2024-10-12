import { Planet } from "@/domain";

export abstract class IPlanetRepository {
  abstract getAll(): Promise<Planet[]>;
}
