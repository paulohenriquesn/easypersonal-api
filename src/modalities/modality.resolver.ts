import { Modality } from '@entities/Modality';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CreateModalityInput } from './dto/create-modality.input';
import { EditModalityInput } from './dto/edit-modality-input';
import { ModalityService } from './modality.service';

@Resolver('classes')
export class ModalityResolver {
  constructor(private modalityService: ModalityService) {}
  @Query(() => [Modality])
  @UseGuards(GqlAuthGuard)
  async getAllModalities(@Args('userId') userId: string): Promise<Modality[]> {
    const modalities = await this.modalityService.getAllModalities(userId);
    return modalities;
  }

  @Query(() => Modality)
  @UseGuards(GqlAuthGuard)
  async getAModality(
    @Args('userId') userId: string,
    @Args('modalityId') modalityId: string,
  ): Promise<Modality> {
    const modality = await this.modalityService.getAModality(
      userId,
      modalityId,
    );
    return modality;
  }

  @Mutation(() => Modality)
  @UseGuards(GqlAuthGuard)
  async createAModality(
    @Args('data') data: CreateModalityInput,
  ): Promise<Modality> {
    const modality = await this.modalityService.createModality(data);
    return modality;
  }

  @Mutation(() => Modality)
  @UseGuards(GqlAuthGuard)
  async deleteAModality(
    @Args('userId') userId: string,
    @Args('modalityId') modalityId: string,
  ): Promise<Modality> {
    const modality = await this.modalityService.deleteAModality(
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
    const modality = await this.modalityService.editAModality(
      userId,
      modalityId,
      data,
    );
    return modality;
  }
}
