import { User } from '@entities/User';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { EditAUserInput } from './dto/edit-a-user-input';
import { UserService } from './user.service';

@Resolver('users')
export class UsersResolver {
  constructor(private usersService: UserService) {}

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async getAUser(@Args('userId') userId: string): Promise<User> {
    const user = await this.usersService.getUser(userId);
    return user;
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async editAUser(
    @Args('userId') userId: string,
    @Args('data') data: EditAUserInput,
  ): Promise<User> {
    const user = await this.usersService.editAUser(userId, data);
    return user;
  }
}
