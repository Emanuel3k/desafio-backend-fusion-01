import { Planet } from "@/domain";

export abstract class IPlanetService {
  abstract getAll(): Promise<Planet[]>;
}
