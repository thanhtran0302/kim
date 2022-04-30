import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum AdPaymentOptions {
  CASH,
  CREDIT_CARD,
  PAYPAL,
}

export enum AdPublish {
  NON_PUBLISHED,
  VALIDATING,
  PUBLISHED,
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

  @Column({
    type: 'enum',
    name: 'publish_state',
    enum: AdPublish,
    default: AdPublish.NON_PUBLISHED,
  })
  publishState: AdPublish;

  @Column({ type: 'timestamp', nullable: true, name: 'published_date' })
  publishedDate: string;

  @Column({ type: 'timestamp', nullable: true, name: 'expired_date' })
  expiredDate: string;

  @Column({
    type: 'enum',
    enum: AdPaymentOptions,
    array: true,
    default: [AdPaymentOptions.CASH],
    name: 'payment_options',
  })
  paymentOptions: AdPaymentOptions[];

  @ManyToOne(() => UserEntity, (user) => user.ads)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
