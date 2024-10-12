import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { NO_CONTENT, OK } from "http-status";
import { IPlanetService } from "@/services/planet/IPlanetService";
import { isEmpty } from "@/utils";

@Controller("planets")
export class PlanetController {
  constructor(private readonly planetService: IPlanetService) {}

  @Get()
  async getAll(@Res() res: Response) {
    const planets = await this.planetService.getAll();

    if (isEmpty(planets)) {
      return res.status(NO_CONTENT).send();
    }

    res.status(OK).send(planets);
  }
}
