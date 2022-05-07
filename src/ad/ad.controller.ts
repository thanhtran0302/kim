import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserEntity } from 'src/user/entities/user.entity';
import { AdService } from './ad.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';

@Controller('ad')
export class AdController {
  constructor(private readonly _adService: AdService) {}

  @Post()
  async create(@Body() createAdDto: CreateAdDto, @Req() req: Request) {
    const { id } = req.user as UserEntity;

    return this._adService.create(createAdDto, id);
  }

  @Get()
  findAll() {
    return this._adService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._adService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdDto: UpdateAdDto,
    @Req() req: Request,
  ) {
    const { id: userId } = req.user as Partial<UserEntity>;
    return this._adService.update(id, updateAdDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._adService.remove(id);
  }
}
