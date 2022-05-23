import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LogInInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
