import { MuscularGroup } from '@entities/MuscularGroup';
import { Workout } from '@entities/Workout';
import { WorkoutGroup } from '@entities/WorkoutGroup';
import { WorkoutTime } from '@entities/WorkoutTime';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  full_name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  picture: string;

  @Field(() => String)
  @Column()
  cellphone?: string;

  @Field(() => [MuscularGroup], { nullable: true })
  @OneToMany(
    () => MuscularGroup,
    (workout_muscular_group) => workout_muscular_group.user_id,
  )
  workouts_muscular_groups?: MuscularGroup[];

  @Field(() => [WorkoutTime], { nullable: true })
  @OneToMany(() => WorkoutTime, (workout_time) => workout_time.user_id)
  workouts_times?: WorkoutTime[];

  @Field(() => [WorkoutGroup], { nullable: true })
  @OneToMany(() => WorkoutGroup, (workout_group) => workout_group.user_id)
  workouts_groups?: WorkoutGroup[];

  @Field(() => [Workout], { nullable: true })
  @OneToMany(() => Workout, (workout) => workout.user_id)
  workouts?: Workout[];
}
