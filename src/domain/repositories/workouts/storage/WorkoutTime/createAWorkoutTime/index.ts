import { WorkoutTime } from '@entities/WorkoutTime';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { getAWorkoutTime } from '../getAWorkoutTime';

export async function createAWorkoutTime(
  request,
  workoutTimeRepository,
): Promise<WorkoutTime> {
  const { data } = request;
  const workoutTimeId = nanoid();
  await workoutTimeRepository.query(
    `insert into workouts_times (id, name,user_id, repeat_type,repeat_value,weight) values ($1,$2,$3,$4, $5, $6)`,
    [
      workoutTimeId,
      data.name,
      data.user_id,
      data.repeat_type,
      data.repeat_value,
      data.weight,
    ],
  );
  const workoutTime = await getAWorkoutTime(
    {
      userId: data.user_id,
      workoutTimeId,
    },
    workoutTimeRepository,
  );
  if (!workoutTime) {
    logger.error('Problem on creating workout time');
    throw new InternalServerErrorException(
      'Problem on creating a workout time',
    );
  }
  return workoutTime;
}
