import { Injectable } from "@nestjs/common";

import { CreatePlanetDTO, Planet, PlanetMapper } from "@/domain";
import { IPlanetRepository } from "@/repositories";
import { IPlanetService } from "@/services";

@Injectable()
export class PlanetService implements IPlanetService {
  constructor(
    private readonly planetRepository: IPlanetRepository,
    private readonly planetMapper: PlanetMapper,
  ) {}

  async create(body: CreatePlanetDTO): Promise<Planet> {
    const planet = this.planetMapper.fromCreate(body);

    return this.planetRepository.create(planet);
  }

  async getAll(): Promise<Planet[]> {
    return this.planetRepository.getAll();
  }
}
