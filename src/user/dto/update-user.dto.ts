import { PartialType } from '@nestjs/mapped-types';
import { UserSex } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  description?: string;
  sex?: UserSex;
  height?: number;
  weight?: number;
}
