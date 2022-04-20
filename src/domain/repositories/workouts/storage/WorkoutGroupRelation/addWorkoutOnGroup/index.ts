import { WorkoutGroupRelation } from '@entities/WorkoutGroupRelation';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { getAWorkoutGroupRelation } from '../getAWorkoutGroupRelation';

export async function createAWorkoutGroupRelation(
  request,
  workoutGroupRelationRepository,
): Promise<WorkoutGroupRelation> {
  const { data } = request;
  const workoutGroupRelationId = nanoid();
  await workoutGroupRelationRepository.query(
    `insert into workouts_groups_relations (id, workout_group_id, workout_id, user_id) values ($1,$2,$3, $4)`,
    [
      workoutGroupRelationId,
      data.workout_group_id,
      data.workout_id,
      data.user_id,
    ],
  );
  const workoutGroupRelation = await getAWorkoutGroupRelation(
    {
      userId: data.user_id,
      workoutGroupRelationId,
    },
    workoutGroupRelationRepository,
  );
  if (!workoutGroupRelation) {
    logger.error('Problem on creating workout relation group');
    throw new InternalServerErrorException(
      'Problem on creating a workout relation group',
    );
  }
  return workoutGroupRelation;
}
