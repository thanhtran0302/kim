import { PartialType } from '@nestjs/mapped-types';
import { UserEthnicity, UserEyesColor, UserSex } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  description?: string;
  sex?: UserSex;
  ethnicity?: UserEthnicity;
  eyesColor?: UserEyesColor;
  height?: number;
  weight?: number;
}
