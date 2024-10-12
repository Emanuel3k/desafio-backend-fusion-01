import { Planet } from "@/domain";

export class StarSystem {
  id: string;
  name: string;
  planets: Planet[];
  description: string;
}
