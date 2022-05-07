import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessOpeningDto } from './create-business-opening.dto';

export class UpdateBusinessOpeningDto extends PartialType(
  CreateBusinessOpeningDto,
) {}
