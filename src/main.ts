import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({     // validação da estrutura que recebe no CRUD
    whitelist: true,    // Cadastra apenas o que tem na lista
    forbidNonWhitelisted: true, // nega o cadastro de estruturas que não estão de acordo com a entidade
    transform: true,            // autorizar apenas objetos apenas especificados no DTO
  }));
  await app.listen(3000);
}
bootstrap();
