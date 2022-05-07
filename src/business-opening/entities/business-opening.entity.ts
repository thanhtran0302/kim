import { AdEntity } from 'src/ad/entities/ad.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum BusinessOpeningDay {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

@Entity({ name: 'business_opening' })
export class BusinessOpeningEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: BusinessOpeningDay })
  day!: BusinessOpeningDay;

  @Column()
  open!: string;

  @Column({ name: 'working_time' })
  workingTime: number;

  @ManyToOne(() => AdEntity, (ad) => ad.id)
  @JoinColumn({ name: 'ad_id' })
  ad: AdEntity;
}
