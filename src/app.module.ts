import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AdModule } from './ad/ad.module';
import { AdEntity } from './ad/entities/ad.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: true,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
    }),
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
