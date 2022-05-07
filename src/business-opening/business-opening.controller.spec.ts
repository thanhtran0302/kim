import { Test, TestingModule } from '@nestjs/testing';
import { BusinessOpeningController } from './business-opening.controller';
import { BusinessOpeningService } from './business-opening.service';

describe('BusinessOpeningController', () => {
  let controller: BusinessOpeningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessOpeningController],
      providers: [BusinessOpeningService],
    }).compile();

    controller = module.get<BusinessOpeningController>(
      BusinessOpeningController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
