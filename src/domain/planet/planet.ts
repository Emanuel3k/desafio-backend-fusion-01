import { Character, StarSystem } from "@/domain";

export class Planet {
  id?: string;
  name: string;
  climate: string;
  terrain: string;
  characters?: Character[];
  population: number;
  starSystem?: StarSystem;
  starSystemId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
