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
@Entity('workouts_times')
export class WorkoutTime {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => User, (user) => user.workouts_times)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @Column()
  @Field(() => String)
  repeat_type: string;

  @Column()
  @Field(() => Number)
  repeat_value: number;

  @Column()
  @Field(() => Number)
  weight: number;
}
