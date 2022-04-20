import { WorkoutGroupRelation } from '@entities/WorkoutGroupRelation';

export async function getAWorkoutGroupRelation(
  request,
  workoutGroupRelationRepository,
): Promise<WorkoutGroupRelation> {
  const { userId, workoutGroupRelationId } = request;
  return await workoutGroupRelationRepository.findOne({
    user_id: userId,
    id: workoutGroupRelationId,
  });
}
