import { ObjectType, Field, ID, registerEnumType, Int } from '@nestjs/graphql';
import { AdModel } from 'src/ad/ad.model';
import {
  ProfileClientType,
  ProfileEthnicity,
  ProfileEyesColor,
  ProfileHairSize,
  ProfileSilhouette,
} from './entities/profile.entity';

registerEnumType(ProfileClientType, {
  name: 'ProfileClientType',
});

registerEnumType(ProfileSilhouette, {
  name: 'ProfileSilhouette',
});

registerEnumType(ProfileEthnicity, {
  name: 'ProfileEthnicity',
});

registerEnumType(ProfileEyesColor, {
  name: 'ProfileEyesColor',
});

registerEnumType(ProfileHairSize, {
  name: 'ProfileHairSize',
});

@ObjectType()
export class ProfileModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;

  @Field(() => Date)
  birthday: Date;

  @Field(() => [ProfileClientType])
  clientTypes: [ProfileClientType];

  @Field(() => ProfileSilhouette)
  silhouette: ProfileSilhouette;

  @Field(() => ProfileEthnicity)
  ethnicity: ProfileEthnicity;

  @Field(() => ProfileEyesColor)
  eyesColor: ProfileEyesColor;

  @Field(() => ProfileHairSize)
  hairSize: ProfileHairSize;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  weight: number;

  @Field(() => String)
  bustSize: string;

  @Field(() => String)
  waistSize: string;

  @Field(() => String)
  hipSize: string;

  @Field(() => String)
  description: string;

  @Field(() => [AdModel])
  ads: [AdModel];
}
