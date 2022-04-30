import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this._userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this._userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this._userService.findOne(id);
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto, @Req() req: Request) {
    const { id } = req.user as Partial<UserEntity>;

    return this._userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._userService.remove(+id);
  }
}
