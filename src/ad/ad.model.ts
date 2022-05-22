import {
  ObjectType,
  Field,
  ID,
  registerEnumType,
  Float,
} from '@nestjs/graphql';
import { UserModel } from 'src/user/user.model';
import { AdPaymentOptions, AdPublish } from './entities/ad.entity';

registerEnumType(AdPaymentOptions, {
  name: 'AdPaymentOptions',
});

registerEnumType(AdPublish, {
  name: 'AdPublish',
});

@ObjectType()
export class AdModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  shortId: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  streetNumber: string;

  @Field(() => String)
  street: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => Float, { nullable: true })
  longitude: number;

  @Field(() => Float, { nullable: true })
  latitude: number;

  @Field(() => AdPublish, { defaultValue: AdPublish.NON_PUBLISHED })
  publishState: AdPublish;

  @Field(() => String, { nullable: true })
  publishDate: string;

  @Field(() => [AdPaymentOptions], { nullable: true })
  paymentOptions: [AdPaymentOptions];

  @Field(() => UserModel)
  user: UserModel;
}
