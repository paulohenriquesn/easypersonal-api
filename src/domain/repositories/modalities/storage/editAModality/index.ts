import { Modality } from '@entities/Modality';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAModality } from '../getAModality';

export async function editAModality(
  request,
  modalityRepository,
): Promise<Modality> {
  const { userId, modalityId, data } = request;
  const modality = await getAModality({ userId }, modalityId);

  if (!modality) {
    logger.error('Problem on edit modality');
    throw new InternalServerErrorException('Problem on delete a modality');
  }

  await modalityRepository.update(
    { id: modalityId },
    { ...data, updated_at: new Date().toISOString() },
  );

  const modalityUpdated = await modalityRepository.create({
    ...modality,
    ...data,
  });

  return modalityUpdated;
}
