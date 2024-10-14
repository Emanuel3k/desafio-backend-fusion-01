import {
  Body,
  Controller,
  Delete,
  Get,
  Next,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { NO_CONTENT, OK } from "http-status";

import { CreatePlanetDTO } from "@/domain";
import { IPlanetService } from "@/services";
import { isEmpty } from "@/utils";

@Controller("planets")
export class PlanetController {
  constructor(private readonly planetService: IPlanetService) {}

  @Post()
  async create(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Body() body: CreatePlanetDTO,
  ) {
    try {
      const planet = await this.planetService.create(body);

      res.status(OK).send(planet);
    } catch (error) {
      next(error);
    }
  }

  @Get()
  async getAll(@Res() res: Response, @Next() next: NextFunction) {
    try {
      const planets = await this.planetService.getAll();

      if (isEmpty(planets)) {
        return res.status(NO_CONTENT).send();
      }

      res.status(OK).send(planets);
    } catch (error) {
      next(error);
    }
  }

  @Get(":id")
  async getById(
    @Res() res: Response,
    @Req() req: Request,
    @Next() next: NextFunction,
  ) {
    try {
      const { id } = req.params;

      const response = await this.planetService.getById(id);

      if (isEmpty(response)) {
        return res.status(NO_CONTENT).send();
      }

      res.status(OK).send(response);
    } catch (error) {
      next(error);
    }
  }

  @Delete(":id")
  async deleteById(
    @Res() res: Response,
    @Req() req: Request,
    @Next() next: NextFunction,
  ) {
    try {
      const { id } = req.params;

      await this.planetService.deleteById(id);

      res.status(NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  }
}
