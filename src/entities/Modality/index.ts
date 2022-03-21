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
@Entity('modalities')
export class Modality {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  //@Column()
  @ManyToOne(() => User, (user) => user.modalities)
  @JoinColumn({ name: 'trainer_id' })
  trainer_id: User;

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
