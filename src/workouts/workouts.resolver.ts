import { MuscularGroup } from '@entities/MuscularGroup';
import { WorkoutTime } from '@entities/WorkoutTime';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CreateAMuscularGroupInput } from './dto/create-a-musculargroup-input';
import { CreateAWorkoutTimeInput } from './dto/create-a-workout-time-input';
import { EditMuscularGroupInput } from './dto/edit-a-musculargroup-input';
import { Workout } from './entities/workout.entity';
import { WorkoutsService } from './workouts.service';

@Resolver(() => Workout)
export class WorkoutsResolver {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Query(() => WorkoutTime)
  @UseGuards(GqlAuthGuard)
  async getAWorkoutTime(
    @Args('userId') userId: string,
    @Args('workoutTimeId') workoutTimeId: string,
  ): Promise<WorkoutTime> {
    const workoutTime = await this.workoutsService.GetAWorkoutTime(
      userId,
      workoutTimeId,
    );
    return workoutTime;
  }

  @Mutation(() => WorkoutTime)
  @UseGuards(GqlAuthGuard)
  async editAWorkoutTime(
    @Args('userId') userId: string,
    @Args('workoutTimeId') workoutTimeId: string,
    @Args('data') data: EditMuscularGroupInput,
  ): Promise<WorkoutTime> {
    const workoutTime = await this.workoutsService.editAWorkoutTime(
      userId,
      workoutTimeId,
      data,
    );
    return workoutTime;
  }

  @Mutation(() => WorkoutTime)
  @UseGuards(GqlAuthGuard)
  async deleteAWorkoutTime(
    @Args('userId') userId: string,
    @Args('workoutTimeId') WorkoutTime: string,
  ): Promise<WorkoutTime> {
    const workoutTime = await this.workoutsService.deleteAWorkoutTime(
      userId,
      WorkoutTime,
    );
    return workoutTime;
  }

  @Mutation(() => WorkoutTime)
  @UseGuards(GqlAuthGuard)
  async createAWorkoutTime(
    @Args('data') data: CreateAWorkoutTimeInput,
  ): Promise<WorkoutTime> {
    const workoutTime = await this.workoutsService.createAWorkoutTime(data);
    return workoutTime;
  }

  @Mutation(() => MuscularGroup)
  @UseGuards(GqlAuthGuard)
  async createAMuscularGroup(
    @Args('data') data: CreateAMuscularGroupInput,
  ): Promise<MuscularGroup> {
    const muscularGroup = await this.workoutsService.createAMuscularGroup(data);
    return muscularGroup;
  }

  @Mutation(() => MuscularGroup)
  @UseGuards(GqlAuthGuard)
  async deleteAMuscularGroup(
    @Args('userId') userId: string,
    @Args('muscularGroupId') muscularGroupId: string,
  ): Promise<MuscularGroup> {
    const muscularGroup = await this.workoutsService.deleteAMuscularGroup(
      userId,
      muscularGroupId,
    );
    return muscularGroup;
  }

  @Mutation(() => MuscularGroup)
  @UseGuards(GqlAuthGuard)
  async editAMuscularGroup(
    @Args('userId') userId: string,
    @Args('muscularGroupId') muscularGroupId: string,
    @Args('data') data: EditMuscularGroupInput,
  ): Promise<MuscularGroup> {
    const muscularGroup = await this.workoutsService.editAMuscularGroup(
      userId,
      muscularGroupId,
      data,
    );
    return muscularGroup;
  }

  @Query(() => MuscularGroup)
  @UseGuards(GqlAuthGuard)
  async getAMuscularGroup(
    @Args('userId') userId: string,
    @Args('muscularGroupId') muscularGroupId: string,
  ): Promise<MuscularGroup> {
    const muscularGroup = await this.workoutsService.getAMuscularGroup(
      userId,
      muscularGroupId,
    );
    return muscularGroup;
  }
}
