import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

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

  @IsOptional()
  @ApiProperty({ required: false, default: 'Today work out is arms' })
  description: string;
}
