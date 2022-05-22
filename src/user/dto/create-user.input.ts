import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User email' })
  email: string;

  @Field(() => String, { description: 'User password' })
  password: string;

  @Field(() => String, { description: 'User firstname' })
  firstname: string;

  @Field(() => String, { description: 'User lastname' })
  lastname: string;

  @Field(() => String, { description: 'User birthday' })
  birthday: string;
}
