import { Class } from '@entities/Class';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAClass } from '../getAClass';

export async function editAClass(request, classesRepository): Promise<Class> {
  const { classId, userId, data } = request;
  const _class = await getAClass({ userId }, classId);

  if (!_class) {
    logger.error('Problem on edit class');
    throw new InternalServerErrorException('Problem on delete a class');
  }

  await classesRepository.update(
    { id: classId },
    { ...data, updated_at: new Date().toISOString() },
  );

  const classUpdated = await classesRepository.create({
    ..._class,
    ...data,
  });

  return classUpdated;
}
