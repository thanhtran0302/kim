import { Field, ID, InputType, Int } from '@nestjs/graphql';
import {
  ProfileClientType,
  ProfileSilhouette,
  ProfileEthnicity,
  ProfileEyesColor,
  ProfileHairSize,
} from '../entities/profile.entity';

@InputType()
export class CreateProfileInput {
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
}
