import { Injectable } from '@nestjs/common';
import { CreateBusinessOpeningDto } from './dto/create-business-opening.dto';
import { UpdateBusinessOpeningDto } from './dto/update-business-opening.dto';

@Injectable()
export class BusinessOpeningService {
  create(createBusinessOpeningDto: CreateBusinessOpeningDto) {
    return 'This action adds a new businessOpening';
  }

  findAll() {
    return `This action returns all businessOpening`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessOpening`;
  }

  update(id: number, updateBusinessOpeningDto: UpdateBusinessOpeningDto) {
    return `This action updates a #${id} businessOpening`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessOpening`;
  }
}
