import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'relax_moment',
      username: 'thanhtran',
      password: 'thanhtran',
      synchronize: true,
      entities: [],
      migrations: ['dist/src/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
