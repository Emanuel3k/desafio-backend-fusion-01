import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/infra/app.module";

class App {
  async server() {
    const app = await NestFactory.create(AppModule);

    await app.listen(1337);
  }
}

export const app = new App();
