import { User } from '@entities/User';
import { UserSubscriptions } from '@entities/UserSubscription';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UsersResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSubscriptions])],
  controllers: [UserController],
  providers: [UserService, UsersResolver],
})
export class UserModule {}
