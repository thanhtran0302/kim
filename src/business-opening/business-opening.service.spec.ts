import { Test, TestingModule } from '@nestjs/testing';
import { BusinessOpeningService } from './business-opening.service';

describe('BusinessOpeningService', () => {
  let service: BusinessOpeningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessOpeningService],
    }).compile();

    service = module.get<BusinessOpeningService>(BusinessOpeningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
