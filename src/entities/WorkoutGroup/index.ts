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
@Entity('workouts_groups')
export class WorkoutGroup {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => User, (user) => user.workouts_groups)
  @JoinColumn({ name: 'user_id' })
  user_id: User;
}
