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
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/passportStrategy/jwt-auth.guard';
import { ProfileModule } from './profile/profile.module';
import { ProfileEntity } from './profile/entities/profile.entity';
import { PhotoEntity } from './photo/entities/photo.entity';
import { MassageModule } from './massage/massage.module';
import { MassageEntity } from './massage/entities/massage.entity';
import { BusinessOpeningModule } from './business-opening/business-opening.module';
import { BusinessOpeningEntity } from './business-opening/entities/business-opening.entity';

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
      entities: [
        UserEntity,
        AdEntity,
        ProfileEntity,
        PhotoEntity,
        MassageEntity,
        BusinessOpeningEntity,
      ],
      migrations: ['dist/src/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
    UserModule,
    AdModule,
    PhotoModule,
    AuthModule,
    ProfileModule,
    MassageModule,
    BusinessOpeningModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
