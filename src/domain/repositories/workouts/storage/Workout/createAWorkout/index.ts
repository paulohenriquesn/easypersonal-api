import { Workout } from '@entities/Workout';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { getAWorkout } from '../getAWorkout';

export async function createAWorkout(
  request,
  workoutRepository,
): Promise<Workout> {
  const { data } = request;
  const workoutId = nanoid();
  await workoutRepository.query(
    `insert into workouts (id, name, user_id, muscular_group_id,workout_time_id) values ($1,$2,$3,$4, $5)`,
    [
      workoutId,
      data.name,
      data.user_id,
      data.muscular_group_id,
      data.workout_time_id,
    ],
  );

  const workout = await getAWorkout(
    { workoutId, userId: data.user_id },
    workoutRepository,
  );

  if (!workout) {
    logger.error('Problem on creating workout');
    throw new InternalServerErrorException('Problem on creating a workout');
  }
  return workout;
}
