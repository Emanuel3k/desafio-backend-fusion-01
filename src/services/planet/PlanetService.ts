import { BadRequestException, Injectable } from "@nestjs/common";

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

  async getById(id: string): Promise<Planet> {
    return this.planetRepository.getById(id);
  }

  async deleteById(id: string): Promise<void> {
    const planet = await this.planetRepository.getById(id);

    if (!planet) {
      throw new BadRequestException("Planet not found");
    }

    return this.planetRepository.deleteById(id);
  }
}
