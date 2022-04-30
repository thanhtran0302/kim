import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AdModule } from './ad/ad.module';
import { PhotoModule } from './photo/photo.module';
import { AdEntity } from './ad/entities/ad.entity';
import { AuthModule } from './auth/auth.module';

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
      entities: [UserEntity, AdEntity],
      migrations: ['dist/src/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
    UserModule,
    AdModule,
    PhotoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
