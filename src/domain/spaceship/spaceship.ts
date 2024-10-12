import { Character } from "@/domain";

export class Spaceship {
  id: string;
  name: string;
  owner: Character;
  model: string;
  ownerId: string;
  capacity: number;
  manufacturer: string;
}
