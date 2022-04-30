import {
  Body,
  Controller,
  Post,
  Res,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './passportStrategy/local.auth.guard';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() login: LoginDto, @Res() res: Response) {
    return res.send(await this._authService.login(login));
  }
}
