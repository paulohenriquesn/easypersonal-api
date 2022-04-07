import { Modality } from '@entities/Modality';

export async function getAModality(
  request,
  modalityRepository,
): Promise<Modality> {
  const { userId, modalityId } = request;
  return await modalityRepository.findOne({
    trainer_id: userId,
    id: modalityId,
  });
}
