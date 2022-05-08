import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MassageService } from './massage.service';
import { CreateMassageDto } from './dto/create-massage.dto';
import { UpdateMassageDto } from './dto/update-massage.dto';

@Controller('massage')
export class MassageController {
  constructor(private readonly massageService: MassageService) {}

  @Post()
  create(@Body() createMassageDto: CreateMassageDto) {
    return this.massageService.create(createMassageDto);
  }

  @Get()
  findAll() {
    return this.massageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.massageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMassageDto: UpdateMassageDto) {
    return this.massageService.update(id, updateMassageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.massageService.remove(id);
  }
}
