import { Class } from '@entities/Class';
import { Modality } from '@entities/Modality';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { ClassesService } from './classes.service';
import { CreateAClassInput } from './dto/create-a-class.input';
import { CreateModalityInput } from './dto/create-modality.input';
import { EditClassInput } from './dto/edit-class-input';
import { EditModalityInput } from './dto/edit-modality-input';

@Resolver('classes')
export class ClassesResolver {
  constructor(private classesService: ClassesService) {}
  @Query(() => [Modality])
  @UseGuards(GqlAuthGuard)
  async getAllModalities(@Args('userId') userId: string): Promise<Modality[]> {
    const modalities = await this.classesService.getAllModalities(userId);
    return modalities;
  }

  @Query(() => Modality)
  @UseGuards(GqlAuthGuard)
  async getAModality(
    @Args('userId') userId: string,
    @Args('modalityId') modalityId: string,
  ): Promise<Modality> {
    const modality = await this.classesService.getAModality(userId, modalityId);
    return modality;
  }

  @Mutation(() => Modality)
  @UseGuards(GqlAuthGuard)
  async createAModality(
    @Args('data') data: CreateModalityInput,
  ): Promise<Modality> {
    const modality = await this.classesService.createModality(data);
    return modality;
  }

  @Mutation(() => Modality)
  @UseGuards(GqlAuthGuard)
  async deleteAModality(
    @Args('userId') userId: string,
    @Args('modalityId') modalityId: string,
  ): Promise<Modality> {
    const modality = await this.classesService.deleteAModality(
      userId,
      modalityId,
    );
    return modality;
  }

  @Mutation(() => Modality)
  @UseGuards(GqlAuthGuard)
  async editAModality(
    @Args('userId') userId: string,
    @Args('modalityId') modalityId: string,
    @Args('data') data: EditModalityInput,
  ): Promise<Modality> {
    const modality = await this.classesService.editAModality(
      userId,
      modalityId,
      data,
    );
    return modality;
  }

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
