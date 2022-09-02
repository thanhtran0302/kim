import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { PRIORITY_LEVEL } from '../entities/task.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    default: 'Work out',
  })
  title: string;

  @IsNotEmpty({
    message: 'PRIORITY_REQUIRED',
  })
  @ApiProperty({ default: PRIORITY_LEVEL.NORMAL })
  priority: number;

  @IsOptional()
  @ApiProperty({ default: new Date(), required: false })
  dueDate: Date;

  @IsOptional()
  @ApiProperty({ default: '3:40', required: false })
  timeSpentEstimate: Date;

  @IsOptional()
  @ApiProperty({ required: false, default: 'Today work out is arms' })
  description: string;
}
