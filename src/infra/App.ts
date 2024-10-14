import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "@/infra/App.module";
import { ErrorHandlerFilter } from "@/middlewares";

class App {
  async server() {
    const app = await NestFactory.create(AppModule, {
      logger: ["error", "warn", "log"],
    });
    app.setGlobalPrefix("api");
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new ErrorHandlerFilter());

    await app.listen(1337);
  }
}

export const app = new App();
