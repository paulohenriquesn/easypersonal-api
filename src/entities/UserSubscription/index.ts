import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscriptions')
export class UserSubscriptions {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  user_id: string;
  @Column()
  stripe_id: string;
  @Column()
  stripe_subscription_id: string;
  @Column()
  trial: boolean;
  @Column()
  created_at: string;
  @Column()
  updated_at: string;
}
