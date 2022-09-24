import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({
    message: 'TITLE_REQUIRED',
  })
  @ApiProperty({
    default: 'Work out',
  })
  title: string;

  @IsOptional()
  @ApiProperty({ default: new Date(), required: false })
  dueDate: Date;

  @IsOptional()
  @ApiProperty({ default: '3:40', required: false })
  timeSpentEstimate: Date;

  @IsOptional()
  @ApiProperty({ required: false, default: 'Today work out is arms' })
  description: string;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  isUrgent: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  isImportant: boolean;
}
