import { Module } from '@nestjs/common';
import { BusinessOpeningService } from './business-opening.service';
import { BusinessOpeningController } from './business-opening.controller';

@Module({
  controllers: [BusinessOpeningController],
  providers: [BusinessOpeningService],
})
export class BusinessOpeningModule {}
