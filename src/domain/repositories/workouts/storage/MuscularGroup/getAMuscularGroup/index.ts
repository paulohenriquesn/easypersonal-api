import { MuscularGroup } from '@entities/MuscularGroup';

export async function getAMuscularGroup(
  request,
  muscularGroupRepository,
): Promise<MuscularGroup> {
  const { userId, muscularGroupId } = request;
  return await muscularGroupRepository.findOne({
    user_id: userId,
    id: muscularGroupId,
  });
}
