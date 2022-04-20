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
@Entity('workouts')
export class Workout {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => User, (user) => user.workouts)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @Column()
  @Field(() => String)
  muscular_group_id: string;

  @Column()
  @Field(() => String)
  workout_time_id: string;
}
