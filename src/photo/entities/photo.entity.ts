import { ProfileEntity } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'file_url' })
  fileUrl: string;

  @Column({ name: 'file_name' })
  fileName: string;

  @ManyToMany(() => ProfileEntity, (profile) => profile.photos)
  @JoinTable({
    name: 'profile_photos',
    joinColumn: {
      name: 'photo',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'profile',
      referencedColumnName: 'id',
    },
  })
  profile: ProfileEntity[];
}
