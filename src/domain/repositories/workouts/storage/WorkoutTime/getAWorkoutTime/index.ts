import { WorkoutTime } from '@entities/WorkoutTime';

export async function getAWorkoutTime(
  request,
  workoutTimeRepository,
): Promise<WorkoutTime> {
  const { userId, workoutTimeId } = request;
  return await workoutTimeRepository.findOne({
    user_id: userId,
    id: workoutTimeId,
  });
}
