import { User } from '@entities/User';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
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

  @ManyToOne(() => User, (user) => user.classes)
  @JoinColumn({ name: 'trainer_id' })
  trainer_id: User;

  @Column()
  @Field(() => String)
  modality_id: string;

  @Column()
  @Field(() => Date)
  start_date: Date;

  @Column()
  @Field(() => Date)
  end_date: Date;

  @Column()
  @Field(() => Date)
  created_at: Date;

  @Column()
  @Field(() => Date)
  updated_at: Date;
}
