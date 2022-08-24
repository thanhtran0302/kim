import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskEntity } from './task/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'magictodo',
      username: 'thanhtran',
      password: 'thanhtran',
      synchronize: true,
      entities: [TaskEntity],
      migrations: ['dist/src/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
