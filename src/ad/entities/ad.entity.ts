import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum AdPaymentOptions {
  CASH = 'cash',
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
}

@Entity({ name: 'ad' })
export class AdEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ name: 'street_number' })
  streetNumber!: string;

  @Column()
  street!: string;

  @Column({ name: 'post_code' })
  postCode!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column()
  website!: string;

  @Column({ type: 'float', nullable: true })
  latitude: number;

  @Column({ type: 'float', nullable: true })
  longitude: number;

  @Column({ type: 'boolean', default: false, name: 'is_published' })
  isPublished: boolean;

  @Column({ type: 'timestamp', nullable: true, name: 'published_date' })
  publishedDate: string;

  @Column({ type: 'timestamp', nullable: true, name: 'expired_date' })
  expired_date: string;

  @Column({ type: 'enum', array: true, default: [AdPaymentOptions.CASH] })
  paymentOptions: AdPaymentOptions[];
}
