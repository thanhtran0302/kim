import { BusinessOpeningEntity } from 'src/business-opening/entities/business-opening.entity';
import { MassageEntity } from 'src/massage/entities/massage.entity';
import { ProfileEntity } from 'src/profile/entities/profile.entity';
import { ReviewEntity } from 'src/review/entities/review.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum AdPaymentOptions {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL',
}

export enum AdPublish {
  NON_PUBLISHED = 'NON_PUBLISHED',
  VALIDATING = 'VALIDATING',
  PUBLISHED = 'PUBLISHED',
}

@Entity({ name: 'ad' })
export class AdEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'ad_short_id' })
  adShortId: string;

  @Column()
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ name: 'street_number' })
  streetNumber!: string;

  @Column()
  street!: string;

  @Column({ name: 'postal_code' })
  postalCode!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column({ name: 'business_phone_number' })
  businessPhoneNumber!: string;

  @Column({ nullable: true })
  website: string;

  @Column({ type: 'float', nullable: true })
  latitude: number;

  @Column({ type: 'float', nullable: true })
  longitude: number;

  @Column({
    type: 'enum',
    name: 'publish_state',
    enum: AdPublish,
    default: AdPublish.VALIDATING,
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

  @OneToMany(() => MassageEntity, (massage) => massage.ad, { nullable: true })
  massages: MassageEntity[];

  @OneToMany(
    () => BusinessOpeningEntity,
    (businessOpening) => businessOpening.id,
    { nullable: true },
  )
  businessOpening: BusinessOpeningEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.id, { nullable: true })
  review: ReviewEntity;

  @OneToMany(() => ProfileEntity, (profile) => profile.ad, { nullable: true })
  profiles: ProfileEntity[];
}
