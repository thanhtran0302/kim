import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
    private _userService: UserService,
    private _jwtService: JwtService,
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
    const token = this._jwtService.sign(rest);

    return {
      accessToken: token,
    };
  }
}
