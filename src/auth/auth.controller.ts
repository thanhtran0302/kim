import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('/login')
  async login(@Body() login: LoginDto, @Res() res: Response) {
    const serviceResponse = await this._authService.login(login);

    if (!serviceResponse) {
      return res.status(404).send({
        message: 'Email or password is incorrect',
        code: 'BAD_CREDENTIALS',
        status: 404,
      });
    }

    return serviceResponse;
  }
}
