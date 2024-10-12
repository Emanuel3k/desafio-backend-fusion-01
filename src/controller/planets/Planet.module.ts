import { Module } from "@nestjs/common";

import { PlanetController } from "@/controller/planets/PlanetController";
import { PlanetMapper } from "@/domain";
import { IPlanetRepository, PlanetRepository } from "@/repositories";
import { IPlanetService, PlanetService } from "@/services";

@Module({
  controllers: [PlanetController],
  providers: [
    {
      provide: IPlanetService,
      useClass: PlanetService,
    },
    PlanetMapper,
    {
      provide: IPlanetRepository,
      useClass: PlanetRepository,
    },
  ],
})
export class PlanetsModule {
}
