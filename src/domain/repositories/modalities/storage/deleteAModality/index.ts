import { Modality } from '@entities/Modality';
import logger from '@log/logger';
import { InternalServerErrorException } from '@nestjs/common';
import { getAModality } from '../getAModality';

export async function deleteAModality(
  request,
  modalityRepository,
): Promise<Modality> {
  const { userId, modalityId } = request;
  const modality = await getAModality({ userId }, modalityId);

  if (!modality) {
    logger.error('Problem on delete modality');
    throw new InternalServerErrorException('Problem on delete a modality');
  }

  await modalityRepository.query(
    `delete from modalities where id=$1 and trainer_id=$2`,
    [modalityId, userId],
  );

  return modality;
}
