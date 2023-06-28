import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CourseModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  })],//forRoot para os tipos de conexões 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
