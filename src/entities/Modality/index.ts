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
  color: string;

  @Column()
  @Field(() => Date)
  created_at: Date;

  @Column()
  @Field(() => Date)
  updated_at: Date;
}
