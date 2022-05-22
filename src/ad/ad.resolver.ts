import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdModel } from './ad.model';
import { AdService } from './ad.service';
import { CreateAdInput } from './dto/create-ad.input';
import { UpdateAdInput } from './dto/update-ad.input';

@Resolver(() => AdModel)
export class AdResolver {
  constructor(private readonly adService: AdService) {}

  @Mutation(() => AdModel)
  createAd(@Args('createAdInput') createAdInput: CreateAdInput) {
    return this.adService.create(createAdInput);
  }

  @Query(() => [AdModel], { name: 'ad' })
  findAll() {
    return this.adService.findAll();
  }

  @Query(() => AdModel, { name: 'ad' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adService.findOne(id);
  }

  @Mutation(() => AdModel)
  updateAd(@Args('updateAdInput') updateAdInput: UpdateAdInput) {
    return this.adService.update(updateAdInput.id, updateAdInput);
  }

  @Mutation(() => AdModel)
  removeAd(@Args('id', { type: () => Int }) id: number) {
    return this.adService.remove(id);
  }
}
