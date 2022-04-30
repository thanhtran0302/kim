import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { AdEntity } from './entities/ad.entity';

@Injectable()
export class AdService {
  constructor(
    @InjectRepository(AdEntity) private _adRepositorry: Repository<AdEntity>,
  ) {}

  async create(createAdDto: CreateAdDto, userId: string) {
    return this._adRepositorry
      .createQueryBuilder()
      .insert()
      .into(AdEntity)
      .values({ ...createAdDto, user: { id: userId } })
      .execute();
  }

  existingAd(userId: string) {
    return this._adRepositorry.findBy({ user: { id: userId } });
  }

  findAll() {
    return `This action returns all ad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ad`;
  }

  update(id: number, updateAdDto: UpdateAdDto) {
    return `This action updates a #${id} ad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ad`;
  }
}
