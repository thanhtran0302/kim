import { ApiProperty } from '@nestjs/swagger';
import GlobalEntity from '../../commonEntity/global.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'task' })
export class TaskEntity extends GlobalEntity {
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
    required: false,
  })
  description: string;

  @Column({
    name: 'is_urgent',
    type: 'boolean',
    nullable: true,
    default: false,
  })
  @ApiProperty({
    required: false,
    example: false,
    description: 'Indicate whether if task is urgent or not',
  })
  isUrgent: boolean;

  @Column({
    name: 'is_important',
    type: 'boolean',
    nullable: true,
    default: false,
  })
  @ApiProperty({
    required: false,
    example: false,
    description: 'Indicate whether if task is important or not',
  })
  isImportant: boolean;

  @Column({ name: 'due_date', type: 'timestamptz', nullable: true })
  @ApiProperty({
    example: '10/10/2022',
    description: "Due date, it's important for algorithm",
    required: false,
  })
  dueDate: Date;

  @Column({
    type: 'time',
    nullable: true,
    name: 'time_spent_estimate',
  })
  @ApiProperty({
    example: '4:40',
    description: 'Estimate time to spend on this task',
    required: false,
  })
  timeSpentEstimate: Date;

  @Column({
    type: 'timestamptz',
    name: 'is_done',
    nullable: true,
  })
  @ApiProperty({
    example: true,
    nullable: true,
    description: '2022-08-26T08:45:42.179Z',
    required: false,
  })
  isDone: Date;
}
