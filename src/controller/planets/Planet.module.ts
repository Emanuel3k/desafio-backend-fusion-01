import { Module } from "@nestjs/common";
import { PlanetController } from "@/controller/planets/PlanetController";
import { IPlanetService, PlanetService } from "@/services";
import { IPlanetRepository, PlanetRepository } from "@/repositories";

@Module({
  controllers: [PlanetController],
  providers: [
    {
      provide: IPlanetService,
      useClass: PlanetService,
    },
    {
      provide: IPlanetRepository,
      useClass: PlanetRepository,
    },
  ],
})
export class PlanetsModule {}
