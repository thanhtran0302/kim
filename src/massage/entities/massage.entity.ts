import { AdEntity } from 'src/ad/entities/ad.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'massage' })
export class MassageEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  duration: number;

  @Column({ name: 'price_discount', nullable: true })
  priceDiscount: number;

  @ManyToOne(() => AdEntity, (ad) => ad.id)
  @JoinColumn({
    name: 'ad_id',
  })
  ad: AdEntity;
}
