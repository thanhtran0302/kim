import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  @ApiProperty({
    required: false,
    default: false,
    example: '2022-08-26T08:45:42.179Z',
  })
  isDone: string;
}
