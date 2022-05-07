import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BusinessOpeningService } from './business-opening.service';
import { CreateBusinessOpeningDto } from './dto/create-business-opening.dto';
import { UpdateBusinessOpeningDto } from './dto/update-business-opening.dto';

@Controller('business-opening')
export class BusinessOpeningController {
  constructor(
    private readonly businessOpeningService: BusinessOpeningService,
  ) {}

  @Post()
  create(@Body() createBusinessOpeningDto: CreateBusinessOpeningDto) {
    return this.businessOpeningService.create(createBusinessOpeningDto);
  }

  @Get()
  findAll() {
    return this.businessOpeningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessOpeningService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessOpeningDto: UpdateBusinessOpeningDto,
  ) {
    return this.businessOpeningService.update(+id, updateBusinessOpeningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessOpeningService.remove(+id);
  }
}
