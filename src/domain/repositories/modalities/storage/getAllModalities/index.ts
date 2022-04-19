import { Modality } from '@entities/Modality';

export async function getAllModalities(
  request,
  modalityRepository,
): Promise<Modality[]> {
  const { userId } = request;
  return await modalityRepository
    .createQueryBuilder('modalities')
    .where('modalities.trainer_id= :trainer_id', { trainer_id: userId })
    .orderBy('created_at', 'DESC')
    .getMany();
}
