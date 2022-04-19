import { Modality } from '@entities/Modality';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { getAModality } from '../getAModality';

export async function createAModality(
  request,
  modalityRepository,
): Promise<Modality> {
  const { data } = request;
  const modalityId = nanoid();
  await modalityRepository.query(
    `insert into modalities (id, name,trainer_id, color) values ($1,$2,$3,$4)`,
    [modalityId, data.name, data.trainer_id, data.color],
  );
  const modality = await getAModality({ userId: data.trainer_id }, modalityId);
  if (!modality) {
    logger.error('Problem on creating modality');
    throw new InternalServerErrorException('Problem on creating a modality');
  }
  return modality;
}
