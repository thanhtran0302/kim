import { AdEntity } from 'src/ad/entities/ad.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum UserSex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum UserType {
  PROFESSIONAL = 'PROFESSIONAL',
  CLIENT = 'CLIENT',
}

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column({ type: 'timestamp', nullable: false })
  birthday!: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: new Date(),
  })
  createdAt!: string;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: new Date(),
  })
  updatedAt!: string;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: string;

  @Column({ type: 'boolean', name: 'is_active', default: true })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: UserSex,
    nullable: true,
  })
  sex: UserSex;

  @Column({
    type: 'enum',
    enum: UserType,
    name: 'user_type',
    default: UserType.PROFESSIONAL,
  })
  userType: UserType;

  @OneToMany(() => AdEntity, (ad) => ad.user)
  @JoinColumn()
  ads: AdEntity[];
}
