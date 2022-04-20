import { WorkoutGroup } from '@entities/WorkoutGroup';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { getAWorkoutGroup } from '../getAWorkoutGroup';

export async function createAWorkoutGroup(
  request,
  workoutGroupRepository,
): Promise<WorkoutGroup> {
  const { data } = request;
  const workoutGroupId = nanoid();
  await workoutGroupRepository.query(
    `insert into workouts_groups (id, name,user_id) values ($1,$2,$3)`,
    [workoutGroupId, data.name, data.user_id],
  );
  const workoutGroup = await getAWorkoutGroup(
    {
      userId: data.user_id,
      workoutGroupId,
    },
    workoutGroupRepository,
  );
  if (!workoutGroup) {
    logger.error('Problem on creating workout group');
    throw new InternalServerErrorException(
      'Problem on creating a workout group',
    );
  }
  return workoutGroup;
}
