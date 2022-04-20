import { Workout } from '@entities/Workout';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAWorkout } from '../getAWorkout';

export async function deleteAWorkout(
  request,
  workoutRepository,
): Promise<Workout> {
  const { userId, workoutId } = request;
  const workout = await getAWorkout({ userId, workoutId }, workoutRepository);

  if (!workout) {
    logger.error('Problem on delete workout');
    throw new InternalServerErrorException('Problem on delete a workout');
  }

  await workoutRepository.query(
    `delete from workouts where id=$1 and user_id=$2`,
    [workoutId, userId],
  );

  return workout;
}
