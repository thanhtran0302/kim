import { AdEntity } from 'src/ad/entities/ad.entity';
import { PhotoEntity } from 'src/photo/entities/photo.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ProfileEyesColor {
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  GREY = 'GREY',
  BROWN = 'BROWN',
  BLACK = 'BLACK',
  HAZEL = 'HAZEL',
}

export enum ProfileEthnicity {
  ASIAN = 'ASIAN',
  LATINO_AMERICAN = 'LATINO_AMERICAN',
  NORTH_AMERICAN = 'NORTH_AMERICAN',
  NORTH_AFRICAN = 'NORTH_AFRICAN',
  SUBSAHARAN_AFRICAN = 'SUBSAHARAN_AFRICAN',
  CAUCASIAN = 'CAUCASIAN',
}

export enum ProfileClientType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  COUPLE = 'COUPLE',
}

export enum ProfileSilhouette {
  VERY_SLIM = 'VERY_SLIM',
  SLIM = 'SLIM',
  NORMAL = 'NORMAL',
  SPORTIVE = 'SPORTIVE',
  PLUMP = 'PLUMP',
  VERY_PLUMP = 'VERY_PLUMP',
}

export enum ProfileHairColor {
  BLACK = 'BLACK',
  BROWN = 'BROWN',
  BLOND = 'BLOND',
  RED = 'RED',
}

export enum ProfileHairSize {
  SHAVED = 'SHAVED',
  SHORT = 'SHORT',
  MEDIUM_SHORT = 'MEDIUM_SHORT',
  MEDIUM_LONG = 'MEDIUM_LONG',
  LONG = 'LONG',
  VERY_LONG = 'VERY_LONG',
}

@Entity({ name: 'profile' })
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  firstname!: string;

  @Column({ nullable: false })
  lastname!: string;

  @Column({ type: 'timestamp', nullable: false })
  birthday!: string;

  @Column()
  description!: string;

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
    enum: ProfileClientType,
    default: [],
    array: true,
    name: 'client_types',
  })
  clientTypes!: ProfileClientType[];

  @Column({ type: 'enum', enum: ProfileEthnicity, nullable: false })
  ethnicity!: ProfileEthnicity;

  @Column({
    type: 'enum',
    enum: ProfileEyesColor,
    nullable: false,
    name: 'eyes_color',
  })
  eyesColor!: ProfileEyesColor;

  @Column({ type: 'int', nullable: false })
  height!: number;

  @Column({ type: 'int', nullable: false })
  weight!: number;

  @Column({ type: 'varchar', name: 'bust_size' })
  bustSize!: string;

  @Column({ type: 'int', name: 'waist_size' })
  waistSize!: number;

  @Column({ type: 'int', name: 'hip_size' })
  hipSize!: number;

  @Column({ type: 'enum', enum: ProfileSilhouette })
  silhouette!: ProfileSilhouette;

  @Column({ type: 'enum', enum: ProfileHairColor, name: 'hair_color' })
  hairColor!: ProfileHairColor;

  @Column({ type: 'enum', enum: ProfileHairSize, name: 'hair_size' })
  hairSize!: ProfileHairSize;

  @ManyToOne(() => AdEntity, (ad) => ad.id, { nullable: false })
  @JoinColumn({ name: 'ad_id' })
  ad: AdEntity;

  @ManyToMany(() => PhotoEntity, (photo) => photo.id, { nullable: true })
  @JoinTable({
    name: 'profile_photos',
    joinColumn: {
      name: 'profile',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'photo',
      referencedColumnName: 'id',
    },
  })
  photos: PhotoEntity[];
}
