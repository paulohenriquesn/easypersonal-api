import { MuscularGroup } from '@entities/MuscularGroup';
import { Workout } from '@entities/Workout';
import { WorkoutGroup } from '@entities/WorkoutGroup';
import { WorkoutGroupRelation } from '@entities/WorkoutGroupRelation';
import { WorkoutTime } from '@entities/WorkoutTime';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/createAMuscularGroup';
import { deleteAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/deleteAMuscularGroup';
import { editAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/editAMuscularGroup';
import { getAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/getAMuscularGroup';
import { createAWorkout } from '@repositories/workouts/storage/Workout/createAWorkout';
import { deleteAWorkout } from '@repositories/workouts/storage/Workout/deleteAWorkout';
import { editAWorkout } from '@repositories/workouts/storage/Workout/editAWorkout';
import { getAWorkout } from '@repositories/workouts/storage/Workout/getAWorkout';
import { createAWorkoutGroup } from '@repositories/workouts/storage/WorkoutGroup/createAWorkoutGroup';
import { deleteAWorkoutGroup } from '@repositories/workouts/storage/WorkoutGroup/deleteAWorkoutGroup';
import { editAWorkoutGroup } from '@repositories/workouts/storage/WorkoutGroup/editAWorkoutGroup';
import { getAWorkoutGroup } from '@repositories/workouts/storage/WorkoutGroup/getAWorkoutGroup';
import { createAWorkoutGroupRelation } from '@repositories/workouts/storage/WorkoutGroupRelation/addWorkoutOnGroup';
import { getWorkoutsFromGroup } from '@repositories/workouts/storage/WorkoutGroupRelation/getWorkoutsFromGroup';
import { deleteAWorkoutFromGroup } from '@repositories/workouts/storage/WorkoutGroupRelation/removeWorkoutFromGroup';
import { createAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/createAWorkoutTime';
import { deleteAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/deleteAWorkoutTime';
import { editAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/editAWorkoutTime';
import { getAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/getAWorkoutTime';
import { Repository } from 'typeorm';
import { CreateAMuscularGroupInput } from './dto/create-a-musculargroup-input';
import { CreateAWorkoutGroupInput } from './dto/create-a-workout-group';
import { CreateAWorkoutTimeInput } from './dto/create-a-workout-time-input';
import { CreateAWorkoutGroupRelationInput } from './dto/create-a-workoutgroup-relation-input';
import { CreateAWorkoutInput } from './dto/create-workout.input';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(MuscularGroup)
    private readonly muscularGroupRepository: Repository<MuscularGroup>,
    @InjectRepository(WorkoutTime)
    private readonly workoutTimeRepository: Repository<WorkoutTime>,
    @InjectRepository(WorkoutGroup)
    private readonly workoutGroupRepository: Repository<WorkoutGroup>,
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>,
    @InjectRepository(WorkoutGroupRelation)
    private readonly workoutGroupRelationRepository: Repository<WorkoutGroupRelation>,
  ) {}

  async deleteAWorkoutFromGroup(userId, workoutGroupId, workoutId) {
    return await deleteAWorkoutFromGroup(
      { userId, workoutGroupId, workoutId },
      this.workoutGroupRelationRepository,
    );
  }

  async getWorkoutsFromGroup(userId, workoutGroupId) {
    return await getWorkoutsFromGroup(
      { userId, workoutGroupId },
      this.workoutGroupRelationRepository,
    );
  }

  async createAWorkoutGroupRelation(data: CreateAWorkoutGroupRelationInput) {
    return await createAWorkoutGroupRelation(
      { data },
      this.workoutGroupRelationRepository,
    );
  }

  async getAWorkout(userId, workoutId) {
    return await getAWorkout({ userId, workoutId }, this.workoutRepository);
  }

  async editAWorkout(userId, workoutId, data) {
    return await editAWorkout(
      { userId, workoutId, data },
      this.workoutRepository,
    );
  }

  async deleteAWorkout(userId, workoutId) {
    return await deleteAWorkout({ userId, workoutId }, this.workoutRepository);
  }

  async createAWorkout(data: CreateAWorkoutInput) {
    return await createAWorkout({ data }, this.workoutRepository);
  }

  async editAWorkoutGroup(userId, workoutGroupId, data) {
    return await editAWorkoutGroup(
      { userId, workoutGroupId, data },
      this.workoutGroupRepository,
    );
  }

  async deleteAWorkoutGroup(userId, workoutGroupId) {
    return await deleteAWorkoutGroup(
      { userId, workoutGroupId },
      this.workoutGroupRepository,
    );
  }

  async GetAWorkoutGroup(userId, workoutGroupId) {
    return await getAWorkoutGroup(
      { userId, workoutGroupId },
      this.workoutGroupRepository,
    );
  }

  async createAWorkoutGroup(data: CreateAWorkoutGroupInput) {
    return await createAWorkoutGroup({ data }, this.workoutGroupRepository);
  }

  async GetAWorkoutTime(userId, workoutTimeId) {
    return await getAWorkoutTime(
      { userId, workoutTimeId },
      this.workoutTimeRepository,
    );
  }

  async editAWorkoutTime(userId, workoutTimeId, data) {
    return await editAWorkoutTime(
      { userId, workoutTimeId, data },
      this.workoutTimeRepository,
    );
  }

  async getAWorkoutTime(userId, workoutTimeId) {
    return await getAWorkoutTime(
      { userId, workoutTimeId },
      this.muscularGroupRepository,
    );
  }

  async deleteAWorkoutTime(userId, workoutTimeId) {
    return await deleteAWorkoutTime(
      { userId, workoutTimeId },
      this.workoutTimeRepository,
    );
  }

  async createAWorkoutTime(data: CreateAWorkoutTimeInput) {
    return await createAWorkoutTime({ data }, this.workoutTimeRepository);
  }

  async getAMuscularGroup(userId, muscularGroupId) {
    return await getAMuscularGroup(
      { userId, muscularGroupId },
      this.muscularGroupRepository,
    );
  }

  async createAMuscularGroup(data: CreateAMuscularGroupInput) {
    return await createAMuscularGroup({ data }, this.muscularGroupRepository);
  }

  async deleteAMuscularGroup(userId, muscularGroupId) {
    return await deleteAMuscularGroup(
      { userId, muscularGroupId },
      this.muscularGroupRepository,
    );
  }

  async editAMuscularGroup(userId, muscularGroupId, data) {
    return await editAMuscularGroup(
      { userId, muscularGroupId, data },
      this.muscularGroupRepository,
    );
  }
}
