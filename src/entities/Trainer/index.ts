import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trainers')
export class Trainer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  picture: string;

  @Column()
  cpf: string;

  @Column()
  address: string;

  @Column()
  birthday: string;

  @Column()
  cellphone: string;

  @Column()
  cognito_id: boolean;

  @Column()
  stripe_id: string;

  @Column()
  stripe_subscription_id: string;
  @Column()
  trial: string;

  @Column()
  created_at: string;
}
