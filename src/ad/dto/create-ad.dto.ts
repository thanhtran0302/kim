import { OmitType } from '@nestjs/mapped-types';
import { AdEntity } from '../entities/ad.entity';

export class CreateAdDto extends OmitType(AdEntity, [
  'adId',
  'id',
  'expiredDate',
  'latitude',
  'longitude',
  'publishState',
  'publishedDate',
  'user',
]) {}
