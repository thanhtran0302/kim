import { Module } from '@nestjs/common';
import { MassageService } from './massage.service';
import { MassageController } from './massage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MassageEntity } from './entities/massage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MassageEntity])],
  controllers: [MassageController],
  providers: [MassageService],
})
export class MassageModule {}
