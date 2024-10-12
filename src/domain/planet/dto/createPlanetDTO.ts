import { IsInt, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreatePlanetDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  climate: string;

  @IsString()
  @IsNotEmpty()
  terrain: string;

  @IsInt()
  @IsNotEmpty()
  population: number;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  starSystemId: string;
}
