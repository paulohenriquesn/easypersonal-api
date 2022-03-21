import { Class } from '@entities/Class';
import { Modality } from '@entities/Modality';
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
  cpf: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  birthday: string;

  @Field(() => String)
  @Column()
  cellphone: string;

  @Field(() => [Modality], { nullable: true })
  @OneToMany(() => Modality, (modality) => modality.trainer_id)
  modalities?: Modality[];

  @Field(() => [Class], { nullable: true })
  @OneToMany(() => Class, (classes) => classes.trainer_id)
  classes?: Class[];

  @Field(() => Boolean)
  @Column()
  student: boolean;
}
