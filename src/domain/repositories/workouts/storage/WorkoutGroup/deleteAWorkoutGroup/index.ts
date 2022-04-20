import { WorkoutGroup } from '@entities/WorkoutGroup';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAWorkoutGroup } from '../getAWorkoutGroup';

export async function deleteAWorkoutGroup(
  request,
  workoutGroupRepository,
): Promise<WorkoutGroup> {
  const { userId, workoutGroupId } = request;
  const workoutGroup = await getAWorkoutGroup(
    { userId, workoutGroupId },
    workoutGroupRepository,
  );

  if (!workoutGroup) {
    logger.error('Problem on delete workout group');
    throw new InternalServerErrorException('Problem on delete a workout group');
  }

  await workoutGroupRepository.query(
    `delete from workouts_groups where id=$1 and user_id=$2`,
    [workoutGroupId, userId],
  );

  return workoutGroup;
}
