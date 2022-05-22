import { Test, TestingModule } from '@nestjs/testing';
import { AdResolver } from './ad.resolver';
import { AdService } from './ad.service';

describe('AdResolver', () => {
  let resolver: AdResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdResolver, AdService],
    }).compile();

    resolver = module.get<AdResolver>(AdResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
