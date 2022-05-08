import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileEntity } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private _profileRepository: Repository<ProfileEntity>,
  ) {}

  create({ adId, ...rest }: CreateProfileDto) {
    return this._profileRepository.save([
      {
        ...rest,
        ad: {
          id: adId,
        },
      },
    ]);
  }

  findAll() {
    return this._profileRepository.find();
  }

  findOne(id: string) {
    return this._profileRepository.findOneBy({ id });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this._profileRepository.update({ id }, { ...updateProfileDto });
  }

  remove(id: string) {
    return this._profileRepository.delete({ id });
  }
}
