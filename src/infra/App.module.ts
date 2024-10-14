import { Global, Module } from "@nestjs/common";

import { PlanetsModule } from "@/controller";
import { PrismaService } from "@/libs";

@Global()
@Module({
  imports: [PlanetsModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
