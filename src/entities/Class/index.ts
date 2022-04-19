import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity, PrimaryGeneratedColumn
} from 'typeorm';

@ObjectType()
@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  modality_id: string;

  @Column({ type: 'jsonb' })
  @Field(() => Date)
  dates: string;

  @Column()
  @Field(() => Date)
  created_at: Date;

  @Column()
  @Field(() => Date)
  updated_at: Date;
}
