import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcryptjs';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async create({ password, ...createUserDto }: CreateUserDto) {
    const { id, birthday, email, firstname, lastname } =
      await this._userRepository.save<CreateUserDto>({
        ...createUserDto,
        password: await bcrypt.hash(password, 10),
      });

    return {
      id,
      birthday,
      email,
      firstname,
      lastname,
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return this._userRepository.findOneBy({ id });
  }

  findOneByEmail(email: string) {
    return this._userRepository.findOne({
      where: {
        email,
      },
      select: {
        password: true,
        id: true,
        role: true,
        email: true,
        firstname: true,
        lastname: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
