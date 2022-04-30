import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private _userService: UserService,
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this._userService.findOneByEmail(email);

    if (user) {
      const cmpPassword = await bcrypt.compare(password, user.password);

      if (cmpPassword) {
        const { password: userPassword, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login({ email }: LoginDto) {
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

    const { password, ...rest } = user;
    const token = jwt.sign(rest, 'SECRET', {
      expiresIn: '30 days',
    });

    return {
      accessToken: token,
    };
  }
}
