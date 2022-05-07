import { PhotoEntity } from 'src/photo/entities/photo.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum ProfileEyesColor {
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  GREY = 'GREY',
  BROWN = 'BROWN',
  BLACK = 'BLACK',
  HAZEL = 'HAZEL',
}

enum ProfileEthnicity {
  ASIAN = 'ASIAN',
  LATINO_AMERICAN = 'LATINO_AMERICAN',
  NORTH_AMERICAN = 'NORTH_AMERICAN',
  NORTH_AFRICAN = 'NORTH_AFRICAN',
  SUBSAHARAN_AFRICAN = 'SUBSAHARAN_AFRICAN',
  CAUCASIAN = 'CAUCASIAN',
}

enum ProfileClientType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  COUPLE = 'COUPLE',
}

enum ProfileSilhouette {
  VERY_SLIM = 'VERY_SLIM',
  SLIM = 'SLIM',
  NORMAL = 'NORMAL',
  SPORTIVE = 'SPORTIVE',
  PLUMP = 'PLUMP',
  VERY_PLUMP = 'VERY_PLUMP',
}

enum ProfileHairColor {
  BLACK = 'BLACK',
  BROWN = 'BROWN',
  BLOND = 'BLOND',
  RED = 'RED',
}

enum ProfileHairSize {
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
  ethnicity!: ProfileEntity;

  @Column({
    type: 'enum',
    enum: ProfileEyesColor,
    nullable: false,
    name: 'eyes_color',
  })
  eyes_color!: ProfileEyesColor;

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

  @ManyToMany(() => PhotoEntity, (photo) => photo.profile)
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
