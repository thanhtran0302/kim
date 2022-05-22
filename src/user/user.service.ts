import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entities/user.entity';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    return this._userRepository.save<CreateUserInput>({
      ...createUserInput,
      password: await bcrypt.hash(createUserInput.password, 10),
    });
  }

  findOne(id: string) {
    return this._userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    await this._userRepository.update(
      {
        id,
      },
      {
        ...updateUserInput,
      },
    );

    return this.findOne(id);
  }
}
