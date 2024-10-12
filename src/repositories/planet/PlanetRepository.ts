import { Injectable } from "@nestjs/common";

import { Planet } from "@/domain";
import { PrismaService } from "@/libs";
import { IPlanetRepository } from "@/repositories";

@Injectable()
export class PlanetRepository implements IPlanetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(planet: Planet): Promise<Planet> {
    const { starSystem: _starSystem, characters: _character, ...data } = planet;

    return this.prisma.planet.create({ data });
  }

  async getAll(): Promise<Planet[]> {
    return this.prisma.planet.findMany();
  }
}
