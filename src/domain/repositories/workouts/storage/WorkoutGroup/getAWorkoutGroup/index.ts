import { MuscularGroup } from '@entities/MuscularGroup';

export async function getAWorkoutGroup(
  request,
  workoutGroupRepository,
): Promise<MuscularGroup> {
  const { userId, workoutGroupId } = request;
  return await workoutGroupRepository.findOne({
    user_id: userId,
    id: workoutGroupId,
  });
}
