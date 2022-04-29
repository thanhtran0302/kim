import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'file_url' })
  fileUrl: string;

  @Column({ name: 'file_name' })
  fileName: string;
}
