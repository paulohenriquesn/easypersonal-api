import { MuscularGroup } from '@entities/MuscularGroup';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAMuscularGroup } from '../getAMuscularGroup';

export async function editAMuscularGroup(
  request,
  muscularGroupRepository,
): Promise<MuscularGroup> {
  const { userId, muscularGroupId, data } = request;
  const muscularGroup = await getAMuscularGroup(
    { userId, muscularGroupId },
    muscularGroupRepository,
  );

  if (!muscularGroup) {
    logger.error('Problem on edit muscular group');
    throw new InternalServerErrorException('Problem on edit a muscular group');
  }

  await muscularGroupRepository.update({ id: muscularGroupId }, { ...data });

  const muscularGroupUpdated = await muscularGroupRepository.create({
    ...muscularGroup,
    ...data,
  });

  return muscularGroupUpdated;
}
