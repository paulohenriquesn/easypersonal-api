import { WorkoutTime } from '@entities/WorkoutTime';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAWorkoutTime } from '../getAWorkoutTime';

export async function deleteAWorkoutTime(
  request,
  workoutTimeRepository,
): Promise<WorkoutTime> {
  const { userId, workoutTimeId } = request;
  const workoutTime = await getAWorkoutTime(
    { userId, workoutTimeId },
    workoutTimeRepository,
  );

  if (!workoutTime) {
    logger.error('Problem on delete workout time');
    throw new InternalServerErrorException('Problem on delete workout time');
  }

  await workoutTimeRepository.query(
    `delete from workouts_times where id=$1 and user_id=$2`,
    [workoutTimeId, userId],
  );

  return workoutTime;
}
