import { Character, StarSystem } from "@/domain";

export class Planet {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  Character?: Character[];
  population: number;
  StarSystem?: StarSystem;
  starSystemId: string;
}
