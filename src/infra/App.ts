import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/infra/App.module";

class App {
  async server() {
    const app = await NestFactory.create(AppModule, {
      logger: ["error", "warn", "log"],
    });

    app.setGlobalPrefix("api");

    await app.listen(1337);
  }
}

export const app = new App();
