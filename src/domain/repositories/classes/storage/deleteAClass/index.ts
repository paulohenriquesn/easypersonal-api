import { Class } from '@entities/Class';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAClass } from '../getAClass';

export async function deleteAClass(request, classesRepository): Promise<Class> {
  const { classId, userId } = request;
  const _class = await getAClass({ userId }, classId);

  if (!_class) {
    logger.error('Problem on delete class');
    throw new InternalServerErrorException('Problem on delete a class');
  }

  await classesRepository.query(
    `delete from classes where id=$1 and trainer_id=$2`,
    [classId, userId],
  );

  return _class;
}
