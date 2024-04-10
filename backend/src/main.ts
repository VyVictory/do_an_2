import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS for a specific origin
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true, // Cho phép truy cập với credentials (cookies, authorization headers)
  });

  await app.listen(3000);
}

bootstrap();

