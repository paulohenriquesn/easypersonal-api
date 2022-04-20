import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('workouts_groups_relations')
export class WorkoutGroupRelation {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  workout_group_id: string;

  @Column()
  @Field(() => String)
  workout_id: string;

  @Column()
  @Field(() => String)
  user_id: string;
}
