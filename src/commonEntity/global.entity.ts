import { ApiProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export default class GlobalEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    example: 'r324e-v434f-49859f-343il',
    description: 'Task UUID',
  })
  id: string;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: new Date(),
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'updated_at',
    default: new Date(),
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamptz',
    name: 'deleted_at',
    nullable: true,
    select: false,
  })
  deletedAt?: Date;
}
