import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS for a specific origin
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true, // Cho phép truy cập với credentials (cookies, authorization headers)
  });
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  await app.listen(3000);
}

bootstrap();

