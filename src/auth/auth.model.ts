import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class AuthModel {
  @Field(() => String)
  accessToken: string;
}
