import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserRole, UserSex, UserType } from './entities/user.entity';

registerEnumType(UserRole, {
  name: 'UserRole',
});

registerEnumType(UserType, {
  name: 'UserType',
});

registerEnumType(UserSex, {
  name: 'UserSex',
});

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;

  @Field(() => String)
  birthday: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

  @Field(() => String, { nullable: true })
  deletedAt: string;

  @Field(() => Boolean, { defaultValue: true })
  isActive: boolean;

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => UserType)
  type: UserType;

  @Field(() => UserSex, { nullable: true })
  sex: UserSex;
}
