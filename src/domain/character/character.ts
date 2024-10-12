import { Planet, Spaceship } from "@/domain";

export class Character {
  id: string;
  name: string;
  specie: string;
  Spaceship: Spaceship[];
  afiliation: string;
  HomePlanet: Planet;
  homePlanetId: string;
}
