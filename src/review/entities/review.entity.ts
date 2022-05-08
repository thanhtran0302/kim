import { AdEntity } from 'src/ad/entities/ad.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'review' })
export class ReviewEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  message!: string;

  @Column({ name: 'service' })
  service!: number;

  @Column({ name: 'cleanliness' })
  cleanliness!: number;

  @Column({ name: 'value_for_money' })
  valueForMoney!: number;

  @Column({ type: 'float' })
  overrall: number;

  @ManyToOne(() => AdEntity, (ad) => ad.id)
  @JoinColumn({ name: 'ad_id' })
  ad: AdEntity;
}
