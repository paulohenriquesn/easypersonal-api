import { MuscularGroup } from '@entities/MuscularGroup';
import { WorkoutTime } from '@entities/WorkoutTime';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/createAMuscularGroup';
import { deleteAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/deleteAMuscularGroup';
import { editAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/editAMuscularGroup';
import { getAMuscularGroup } from '@repositories/workouts/storage/MuscularGroup/getAMuscularGroup';
import { createAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/createAWorkoutTime';
import { deleteAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/deleteAWorkoutTime';
import { editAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/editAWorkoutTime';
import { getAWorkoutTime } from '@repositories/workouts/storage/WorkoutTime/getAWorkoutTime';
import { Repository } from 'typeorm';
import { CreateAMuscularGroupInput } from './dto/create-a-musculargroup-input';
import { CreateAWorkoutTimeInput } from './dto/create-a-workout-time-input';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(MuscularGroup)
    private readonly muscularGroupRepository: Repository<MuscularGroup>,
    @InjectRepository(WorkoutTime)
    private readonly workoutTimeRepository: Repository<WorkoutTime>,
  ) {}

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
