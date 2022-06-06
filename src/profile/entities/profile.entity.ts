import { AdEntity } from 'src/ad/entities/ad.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  PULPY = 'PULPY',
  PLUMP = 'PLUMP',
  VERY_PLUMP = 'VERY_PLUMP',
}

export enum ProfileEthnicity {
  LATINA = 'LATINA',
  NORTH_AMERICAN = 'NORTH_AMERICAN',
  NORTH_AFRICAN = 'NORTH_AFRICAN',
  SUBSAHARAN_AFRICAN = 'SUBSAHARAN_AFRICAN',
  SOUTH_ASIAN = 'SOUTH_ASIAN',
  SOUTH_EAST_ASIAN = 'SOUTH_EAST_ASIAN',
  EAST_ASIAN = 'EAST_ASIAN',
  EUROPEAN = 'EUROPEAN',
}

export enum ProfileEyesColor {
  GREEN = 'GREEN',
  GREY = 'GREY',
  HAZEL = 'HAZEL',
  BROWN = 'BROWN',
  BLUE = 'BLUE',
  BLACK = 'BLACK',
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
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ type: 'timestamp' })
  birthday: string;

  @Column({
    array: true,
    type: 'enum',
    enum: ProfileClientType,
  })
  client_types: ProfileClientType[];

  @Column({ type: 'enum', enum: ProfileSilhouette })
  silhouette: ProfileSilhouette;

  @Column({ type: 'enum', enum: ProfileEthnicity })
  ethnicity: ProfileEthnicity;

  @Column({ type: 'enum', enum: ProfileEyesColor, name: 'eyes_color' })
  eyesColor: ProfileEyesColor;

  @Column({ type: 'enum', enum: ProfileHairSize, name: 'hair_size' })
  hairSize: ProfileHairSize;

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'varchar', name: 'bust_size' })
  bustSize: string;

  @Column({ type: 'varchar', name: 'waist_size' })
  waistSize: string;

  @Column({ type: 'varchar', name: 'hip_size' })
  hipSize: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => AdEntity, (ad) => ad.id, { nullable: false })
  @JoinTable({
    name: 'profiles_ads',
    joinColumn: {
      name: 'profile_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ad_id',
      referencedColumnName: 'id',
    },
  })
  ads: AdEntity[];
}
