import { MuscularGroup } from '@entities/MuscularGroup';

export async function getAllMuscularGroups(
  request,
  muscularGroupRepository,
): Promise<MuscularGroup> {
  const { userId } = request;
  return await muscularGroupRepository.find({
    user_id: userId,
  });
}
