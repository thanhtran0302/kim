import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-express';

import * as bcrypt from 'bcryptjs';

import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LogInInput } from './dto/login.input';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async logIn({ email, password }: LogInInput) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      select: ['password', 'id', 'role', 'type', 'email'],
    });

    if (!user) {
      throw new ApolloError('USER_NOT_FOUND');
    }

    const cmpPassword = await bcrypt.compare(password, user.password);
    if (!cmpPassword) {
      throw new ApolloError('PASSWORD_INCORRECT');
    }

    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        role: user.role,
        type: user.type,
        email: user.email,
      }),
    };
  }
}
