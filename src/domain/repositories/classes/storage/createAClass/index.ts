import { Class } from '@entities/Class';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { getAClass } from '../getAClass';

export async function createAClass(request, classesRepository): Promise<Class> {
  const { data } = request;
  if (!data.start_date || !data.end_date) {
    logger.error('Invalid dates on creating class');
    throw new InternalServerErrorException('Invalid dates on creating class');
  }
  const classId = nanoid();
  await classesRepository.query(
    `insert into classes (id, name, trainer_id, modality_id, start_date, end_date) values ($1,$2,$3,$4, $5, $6)`,
    [
      classId,
      data.name,
      data.trainer_id,
      data.modality_id,
      data.start_date,
      data.end_date,
    ],
  );
  const _class = await getAClass(
    { userId: data.trainer_id, classId },
    classesRepository,
  );
  if (!_class) {
    logger.error('Problem on creating class');
    throw new InternalServerErrorException('Problem on creating a class');
  }
  return _class;
}
