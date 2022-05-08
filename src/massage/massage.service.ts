import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMassageDto } from './dto/create-massage.dto';
import { UpdateMassageDto } from './dto/update-massage.dto';
import { MassageEntity } from './entities/massage.entity';

@Injectable()
export class MassageService {
  constructor(
    @InjectRepository(MassageEntity)
    private _massageRepository: Repository<MassageEntity>,
  ) {}

  create({ adId, ...rest }: CreateMassageDto) {
    return this._massageRepository.save({ ...rest, ad: { id: adId } });
  }

  findAll() {
    return this._massageRepository.find();
  }

  findOne(id: string) {
    return this._massageRepository.findOneBy({ id });
  }

  update(id: string, updateMassageDto: UpdateMassageDto) {
    return this._massageRepository.update({ id }, { ...updateMassageDto });
  }

  remove(id: string) {
    return this._massageRepository.delete({ id });
  }
}
