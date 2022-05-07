import { OmitType } from '@nestjs/mapped-types';
import { AdEntity } from '../entities/ad.entity';

export class CreateAdDto extends OmitType(AdEntity, [
  'adShortId',
  'id',
  'expiredDate',
  'latitude',
  'longitude',
  'publishState',
  'publishedDate',
  'user',
]) {}
