import { ApiProperty } from '@nestjs/swagger';
import TimestampEntity from 'src/timestamp/timestamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum PRIORITY_TYPE {
  LINEAR = 'LINEAR',
  EXPONENTIAL = 'EXPONENTIAL',
}

@Entity({ name: 'task' })
export class TaskEntity extends TimestampEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    example: 'r324e-v434f-49859f-343il',
    description: 'Task UUID',
  })
  id: string;

  @Column()
  @ApiProperty({
    example: 'Should clean database',
    description: 'Task title',
  })
  title: string;

  @Column()
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
    type: 'enum',
    enum: PRIORITY_TYPE,
    default: PRIORITY_TYPE.EXPONENTIAL,
    name: 'priority_type',
  })
  priorityTtpe: PRIORITY_TYPE;
}
