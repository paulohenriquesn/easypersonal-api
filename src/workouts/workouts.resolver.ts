import { MuscularGroup } from '@entities/MuscularGroup';
import { Workout } from '@entities/Workout';
import { WorkoutGroup } from '@entities/WorkoutGroup';
import { WorkoutGroupRelation } from '@entities/WorkoutGroupRelation';
import { WorkoutTime } from '@entities/WorkoutTime';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CreateAMuscularGroupInput } from './dto/create-a-musculargroup-input';
import { CreateAWorkoutGroupInput } from './dto/create-a-workout-group';
import { CreateAWorkoutTimeInput } from './dto/create-a-workout-time-input';
import { CreateAWorkoutGroupRelationInput } from './dto/create-a-workoutgroup-relation-input';
import { CreateAWorkoutInput } from './dto/create-workout.input';
import { EditMuscularGroupInput } from './dto/edit-a-musculargroup-input';
import { WorkoutsService } from './workouts.service';

@Resolver(() => Workout)
export class WorkoutsResolver {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Mutation(() => Workout)
  @UseGuards(GqlAuthGuard)
  async deleteAWorkoutFromGroup(
    @Args('userId') userId: string,
    @Args('workoutGroupId') workoutGroupId: string,
    @Args('workoutId') workoutId: string,
  ): Promise<Workout> {
    const workout = await this.workoutsService.deleteAWorkoutFromGroup(
      userId,
      workoutGroupId,
      workoutId,
    );
    return workout;
  }

  @Query(() => [Workout])
  @UseGuards(GqlAuthGuard)
  async getWorkoutsFromGroup(
    @Args('userId') userId: string,
    @Args('workoutGroupId') workoutGroupId: string,
  ): Promise<Workout[]> {
    const workouts = await this.workoutsService.getWorkoutsFromGroup(
      userId,
      workoutGroupId,
    );
    return workouts;
  }

  @Mutation(() => WorkoutGroupRelation)
  @UseGuards(GqlAuthGuard)
  async createAWorkoutGroupRelation(
    @Args('data') data: CreateAWorkoutGroupRelationInput,
  ): Promise<WorkoutGroupRelation> {
    const workoutGroupRelation =
      await this.workoutsService.createAWorkoutGroupRelation(data);
    return workoutGroupRelation;
  }

  @Query(() => Workout)
  @UseGuards(GqlAuthGuard)
  async getAWorkout(
    @Args('userId') userId: string,
    @Args('workoutId') workoutId: string,
  ): Promise<Workout> {
    const workout = await this.workoutsService.getAWorkout(userId, workoutId);
    return workout;
  }

  @Mutation(() => Workout)
  @UseGuards(GqlAuthGuard)
  async editAWorkout(
    @Args('userId') userId: string,
    @Args('workoutId') workoutId: string,
    @Args('data') data: EditMuscularGroupInput,
  ): Promise<Workout> {
    const workout = await this.workoutsService.editAWorkout(
      userId,
      workoutId,
      data,
    );
    return workout;
  }

  @Mutation(() => Workout)
  @UseGuards(GqlAuthGuard)
  async deleteAWorkout(
    @Args('userId') userId: string,
    @Args('workoutId') workoutId: string,
  ): Promise<Workout> {
    const workout = await this.workoutsService.deleteAWorkout(
      userId,
      workoutId,
    );
    return workout;
  }

  @Mutation(() => Workout)
  @UseGuards(GqlAuthGuard)
  async createAWorkout(
    @Args('data') data: CreateAWorkoutInput,
  ): Promise<Workout> {
    const workout = await this.workoutsService.createAWorkout(data);
    return workout;
  }

  @Mutation(() => WorkoutGroup)
  @UseGuards(GqlAuthGuard)
  async editAWorkoutGroup(
    @Args('userId') userId: string,
    @Args('workoutGroupId') workoutGroupId: string,
    @Args('data') data: EditMuscularGroupInput,
  ): Promise<WorkoutGroup> {
    const workoutGroup = await this.workoutsService.editAWorkoutGroup(
      userId,
      workoutGroupId,
      data,
    );
    return workoutGroup;
  }

  @Mutation(() => WorkoutGroup)
  @UseGuards(GqlAuthGuard)
  async deleteAWorkoutGroup(
    @Args('userId') userId: string,
    @Args('workoutGroupId') WorkoutGroup: string,
  ): Promise<WorkoutGroup> {
    const workoutGroup = await this.workoutsService.deleteAWorkoutGroup(
      userId,
      WorkoutGroup,
    );
    return workoutGroup;
  }

  @Mutation(() => WorkoutGroup)
  @UseGuards(GqlAuthGuard)
  async createAWorkoutGroup(
    @Args('data') data: CreateAWorkoutGroupInput,
  ): Promise<WorkoutGroup> {
    const workoutGroup = await this.workoutsService.createAWorkoutGroup(data);
    return workoutGroup;
  }

  @Query(() => WorkoutGroup)
  @UseGuards(GqlAuthGuard)
  async getAWorkoutGroup(
    @Args('userId') userId: string,
    @Args('workoutGroupId') workoutGroupId: string,
  ): Promise<WorkoutGroup> {
    const workoutGroup = await this.workoutsService.GetAWorkoutGroup(
      userId,
      workoutGroupId,
    );
    return workoutGroup;
  }

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
