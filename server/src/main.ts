import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle("API VN History Chatbot")
    .setDescription("API VN History Chatbot")
    .setVersion("0.0.1")
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("swagger", app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);
}
bootstrap();
