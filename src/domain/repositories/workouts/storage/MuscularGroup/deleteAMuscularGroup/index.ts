import { MuscularGroup } from '@entities/MuscularGroup';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAMuscularGroup } from '../getAMuscularGroup';

export async function deleteAMuscularGroup(
  request,
  muscularRepository,
): Promise<MuscularGroup> {
  const { userId, muscularGroupId } = request;
  const muscularGroup = await getAMuscularGroup(
    { userId, muscularGroupId },
    muscularRepository,
  );

  if (!muscularGroup) {
    logger.error('Problem on delete muscular group');
    throw new InternalServerErrorException(
      'Problem on delete a muscular group',
    );
  }

  await muscularRepository.query(
    `delete from workouts_muscular_groups where id=$1 and user_id=$2`,
    [muscularGroupId, userId],
  );

  return muscularGroup;
}
