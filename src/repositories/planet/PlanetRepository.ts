import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/libs";
import { IPlanetRepository } from "@/repositories";
import { Planet } from "@/domain";

@Injectable()
export class PlanetRepository implements IPlanetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Planet[]> {
    return this.prisma.planet.findMany();
  }
}
