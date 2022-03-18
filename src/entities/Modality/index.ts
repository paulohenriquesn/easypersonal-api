import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modalities')
export class Modality {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  trainer_id: string;

  @Column()
  color: string;

  @Column()
  created_at: Date;
}
