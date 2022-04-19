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
@Entity('workouts_muscular_groups')
export class MuscularGroup {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => User, (user) => user.workouts_muscular_groups)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @Column()
  @Field(() => String)
  icon_name: string;
}
