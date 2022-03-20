import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('modalities')
export class Modality {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  trainer_id: string;

  @Column()
  @Field(() => String)
  color: string;

  @Column()
  @Field(() => String)
  created_at: Date;
}
