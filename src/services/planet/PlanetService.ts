import { Planet } from "@/domain";
import { IPlanetService } from "@/services";
import { IPlanetRepository } from "@/repositories";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PlanetService implements IPlanetService {
  constructor(private readonly planetRepository: IPlanetRepository) {}

  getAll(): Promise<Planet[]> {
    return this.planetRepository.getAll();
  }
}
