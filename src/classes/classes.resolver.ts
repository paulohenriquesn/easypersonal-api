import { Modality } from '@entities/Modality';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { ClassesService } from './classes.service';
import { CreateModalityInput } from './dto/create-modality.input';
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
  async createAModality(
    @Args('data') data: CreateModalityInput,
  ): Promise<Modality> {
    const modality = await this.classesService.createModality(data);
    return modality;
  }

  @Mutation(() => Modality)
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
}
