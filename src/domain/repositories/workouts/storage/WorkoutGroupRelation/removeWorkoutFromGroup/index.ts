import { Workout } from '@entities/Workout';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';

export async function deleteAWorkoutFromGroup(
  request,
  workoutGroupRelationRepository,
): Promise<Workout> {
  const { userId, workoutGroupId, workoutId } = request;
  const workout_id = await workoutGroupRelationRepository.query(
    'select workout_id from workouts_groups_relations where user_id = $1 and workout_group_id = $2 and workout_id = $3 limit 1',
    [userId, workoutGroupId, workoutId],
  );
  try {
    const workout = await workoutGroupRelationRepository.query(
      'select * from workouts where id=$1',
      [workout_id[0].workout_id],
    );

    await workoutGroupRelationRepository.query(
      'delete from workouts_groups_relations where user_id=$1 and workout_id=$2 and workout_group_id=$3',
      [userId, workoutId, workoutGroupId],
    );

    return workout[0];
  } catch {
    logger.error('Problem on delete workout from group');
    throw new InternalServerErrorException(
      'Problem on delete a workout from group',
    );
  }
}
