import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this._userRepository.findOne({
      where: {
        email,
      },
      select: {
        password: true,
        id: true,
        role: true,
        email: true,
      },
    });

    if (!user) {
      throw new Error('user not found');
    }
    const cmpPassword = await bcrypt.compare(password, user.password);

    if (cmpPassword) {
      const { password, ...rest } = user;
      const token = jwt.sign(rest, 'SECRET', {
        expiresIn: '30 days',
      });

      return {
        accessToken: token,
      };
    }

    return null;
  }
}
