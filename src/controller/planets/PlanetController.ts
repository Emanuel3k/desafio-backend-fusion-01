import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { NO_CONTENT, OK } from "http-status";

import { CreatePlanetDTO } from "@/domain";
import { IPlanetService } from "@/services";
import { isEmpty } from "@/utils";

@Controller("planets")
export class PlanetController {
  constructor(private readonly planetService: IPlanetService) {}

  @Post()
  async create(@Res() res: Response, @Body() body: CreatePlanetDTO) {
    try {
      const planet = await this.planetService.create(body);

      res.status(OK).send(planet);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  @Get()
  async getAll(@Res() res: Response) {
    try {
      const planets = await this.planetService.getAll();

      if (isEmpty(planets)) {
        return res.status(NO_CONTENT).send();
      }

      res.status(OK).send(planets);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  @Get(":id")
  async getById(@Res() res: Response, @Req() req: Request) {
    try {
      const { id } = req.params;

      const response = await this.planetService.getById(id);

      if (isEmpty(response)) {
        return res.status(NO_CONTENT).send();
      }

      res.status(OK).send(response);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}
