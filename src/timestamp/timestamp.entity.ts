import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export default class TimestampEntity {
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: new Date(),
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: new Date(),
  })
  updatedAt: string;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: string;
}
