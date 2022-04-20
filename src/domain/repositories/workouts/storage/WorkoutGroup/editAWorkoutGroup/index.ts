import { WorkoutGroup } from '@entities/WorkoutGroup';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAWorkoutGroup } from '../getAWorkoutGroup';

export async function editAWorkoutGroup(
  request,
  workoutGroupRepository,
): Promise<WorkoutGroup> {
  const { userId, workoutGroupId, data } = request;
  const workoutGroup = await getAWorkoutGroup(
    { userId, workoutGroupId },
    workoutGroupRepository,
  );

  if (!workoutGroup) {
    logger.error('Problem on edit workout group');
    throw new InternalServerErrorException('Problem on edit a workout group');
  }

  await workoutGroupRepository.update({ id: workoutGroupId }, { ...data });

  const workoutGroupUpdated = await workoutGroupRepository.create({
    ...workoutGroup,
    ...data,
  });

  return workoutGroupUpdated;
}
