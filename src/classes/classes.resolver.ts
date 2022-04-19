import { Class } from '@entities/Class';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { ClassesService } from './classes.service';
import { CreateAClassInput } from './dto/create-a-class.input';
import { EditClassInput } from './dto/edit-class-input';

@Resolver('classes')
export class ClassesResolver {
  constructor(private classesService: ClassesService) {}
  @Query(() => Class)
  @UseGuards(GqlAuthGuard)
  async getAClass(
    @Args('userId') userId: string,
    @Args('classId') classId: string,
  ): Promise<Class> {
    const _class = await this.classesService.getAClass(userId, classId);
    return _class;
  }

  @Query(() => [Class])
  @UseGuards(GqlAuthGuard)
  async getAllClasses(@Args('userId') userId: string): Promise<Class[]> {
    const classes = await this.classesService.getAllClasses(userId);
    return classes;
  }

  @Mutation(() => Class)
  @UseGuards(GqlAuthGuard)
  async createAClass(@Args('data') data: CreateAClassInput): Promise<Class> {
    const _class = await this.classesService.createAClass(data);
    return _class;
  }

  @Mutation(() => Class)
  @UseGuards(GqlAuthGuard)
  async deleteAClass(
    @Args('userId') userId: string,
    @Args('classId') classId: string,
  ): Promise<Class> {
    const _class = await this.classesService.deleteAClass(userId, classId);
    return _class;
  }

  @Mutation(() => Class)
  @UseGuards(GqlAuthGuard)
  async editAClass(
    @Args('userId') userId: string,
    @Args('classId') classId: string,
    @Args('data') data: EditClassInput,
  ): Promise<Class> {
    const _class = await this.classesService.editAClass(userId, classId, data);
    return _class;
  }
}
