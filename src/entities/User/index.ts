import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  full_name: string;

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
  student: boolean;
}
