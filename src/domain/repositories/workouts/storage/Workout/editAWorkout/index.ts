import { Workout } from '@entities/Workout';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAWorkout } from '../getAWorkout';

export async function editAWorkout(
  request,
  workoutRepository,
): Promise<Workout> {
  const { userId, workoutId, data } = request;
  const workout = await getAWorkout({ userId, workoutId }, workoutRepository);

  if (!workout) {
    logger.error('Problem on edit workout');
    throw new InternalServerErrorException('Problem on edit a workout');
  }

  await workoutRepository.update({ id: workoutId }, { ...data });

  const workoutUpdated = await workoutRepository.create({
    ...workout,
    ...data,
  });

  return workoutUpdated;
}
