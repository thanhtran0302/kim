import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { customAlphabet } from 'nanoid';

import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { AdEntity } from './entities/ad.entity';

@Injectable()
export class AdService {
  constructor(
    @InjectRepository(AdEntity) private _adRepositorry: Repository<AdEntity>,
  ) {}

  async create(createAdDto: CreateAdDto, userId: string) {
    const customNanoId = customAlphabet('12346789ABCDEFGHJKLMNPQRTUVWXY');

    return this._adRepositorry
      .createQueryBuilder()
      .insert()
      .into(AdEntity)
      .values({
        ...createAdDto,
        adId: `RXM-${customNanoId(8).toUpperCase()}`,
        user: { id: userId },
      })
      .execute();
  }

  findAll() {
    return `This action returns all ad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ad`;
  }

  update(id: string, updateAdDto: UpdateAdDto, userId: string) {
    return this._adRepositorry.update(
      {
        id,
        user: {
          id: userId,
        },
      },
      {
        ...updateAdDto,
      },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} ad`;
  }
}
