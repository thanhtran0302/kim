import TimestampEntity from 'src/timestamp/timestamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum PRIORITY_TYPE {
  LINEAR = 'LINEAR',
  EXPONENTIAL = 'EXPONENTIAL',
}

@Entity({ name: 'task' })
export class TaskEntity extends TimestampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'priority_point' })
  priorityPoint: number;

  @Column({ name: 'due_date', type: 'timestamp' })
  dueDate: string;

  @Column({
    type: 'enum',
    enum: PRIORITY_TYPE,
    default: PRIORITY_TYPE.EXPONENTIAL,
    name: 'priority_type',
  })
  priorityTtpe: PRIORITY_TYPE;
}
