import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { PRIORITY_TYPE } from '../entities/task.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    default: 'Work out',
  })
  title: string;

  @IsNotEmpty({
    message: 'PRIORITY_POINT_REQUIRED',
  })
  @ApiProperty({ default: 4 })
  priorityPoint: number;

  @IsNotEmpty()
  @ApiProperty({ default: new Date().toISOString() })
  dueDate: string;

  @IsNotEmpty()
  @ApiProperty({ default: PRIORITY_TYPE.EXPONENTIAL })
  priorityType: PRIORITY_TYPE;

  @IsOptional()
  @ApiProperty({ required: false, default: 'Today work out is arms' })
  description: string;
}
