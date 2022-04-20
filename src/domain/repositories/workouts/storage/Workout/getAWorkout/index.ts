import { Workout } from '@entities/Workout';

export async function getAWorkout(
  request,
  workoutRepository,
): Promise<Workout> {
  const { userId, workoutId } = request;

  return await workoutRepository.findOne({
    user_id: userId,
    id: workoutId,
  });
}
