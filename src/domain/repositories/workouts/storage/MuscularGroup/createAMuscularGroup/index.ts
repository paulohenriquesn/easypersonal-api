import { MuscularGroup } from '@entities/MuscularGroup';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { getAMuscularGroup } from '../getAMuscularGroup';

export async function createAMuscularGroup(
  request,
  muscularGroupRepository,
): Promise<MuscularGroup> {
  const { data } = request;
  const muscularGroupId = nanoid();
  await muscularGroupRepository.query(
    `insert into workouts_muscular_groups (id, name,user_id, icon_name) values ($1,$2,$3,$4)`,
    [muscularGroupId, data.name, data.user_id, data.icon_name],
  );
  const muscularGroup = await getAMuscularGroup(
    {
      userId: data.user_id,
      muscularGroupId,
    },
    muscularGroupRepository,
  );
  if (!muscularGroup) {
    logger.error('Problem on creating muscular group');
    throw new InternalServerErrorException(
      'Problem on creating a muscular group',
    );
  }
  return muscularGroup;
}
