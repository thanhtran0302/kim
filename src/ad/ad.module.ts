import { Module } from '@nestjs/common';
import { AdService } from './ad.service';
import { AdResolver } from './ad.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdEntity } from './entities/ad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdEntity])],
  providers: [AdResolver, AdService],
})
export class AdModule {}
