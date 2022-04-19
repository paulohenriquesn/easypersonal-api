import { WorkoutTime } from '@entities/WorkoutTime';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAWorkoutTime } from '../getAWorkoutTime';

export async function editAWorkoutTime(
  request,
  workoutTimeRepository,
): Promise<WorkoutTime> {
  const { userId, workoutTimeId, data } = request;
  const workoutTime = await getAWorkoutTime(
    { userId, workoutTimeId },
    workoutTimeRepository,
  );

  if (!workoutTime) {
    logger.error('Problem on edit workout time');
    throw new InternalServerErrorException('Problem on edit a workout time');
  }

  await workoutTimeRepository.update({ id: workoutTimeId }, { ...data });

  const workoutTimeUpdated = await workoutTimeRepository.create({
    ...workoutTime,
    ...data,
  });

  return workoutTimeUpdated;
}
