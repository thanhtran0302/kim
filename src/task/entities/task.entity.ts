import { ApiProperty } from '@nestjs/swagger';
import TimestampEntity from 'src/commonEntity/global.entity';
import { Column, Entity } from 'typeorm';

export enum PRIORITY_LEVEL {
  LOWEST = 'LOWEST',
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  HIGHEST = 'HIGHEST',
  URGENT = 'URGENT',
  CRITICAL = 'CRITICAL',
}

@Entity({ name: 'task' })
export class TaskEntity extends TimestampEntity {
  @Column()
  @ApiProperty({
    example: 'Should clean database',
    description: 'Task title',
  })
  title: string;

  @Column({ nullable: true })
  @ApiProperty({
    example: 'Clean database tables, except user table',
    description: 'Task description',
  })
  description: string;

  @Column({ name: 'priority_point' })
  @ApiProperty({
    example: 1,
    description:
      'Task priority point. Point is use as multiplier with priotyType, and dueDate',
  })
  priorityPoint: number;

  @Column({ name: 'due_date', type: 'timestamp' })
  @ApiProperty({
    example: '10/10/2022',
    description: "Due date, it's important for algorithm",
  })
  dueDate: string;

  @Column({
    type: 'timestamp',
    name: 'is_done',
    nullable: true,
  })
  @ApiProperty({
    example: true,
    nullable: true,
    description: '2022-08-26T08:45:42.179Z',
  })
  isDone: boolean;
}
