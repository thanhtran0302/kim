import { Module } from '@nestjs/common';
import { MassageService } from './massage.service';
import { MassageController } from './massage.controller';

@Module({
  controllers: [MassageController],
  providers: [MassageService],
})
export class MassageModule {}
