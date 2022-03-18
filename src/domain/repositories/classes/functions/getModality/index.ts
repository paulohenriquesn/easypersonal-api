import { getModalityOnStorage } from '@repositories/classes/storage/getModality';

export async function getModalities(
  userId,
  modalityId,
  modalityRepository,
): Promise<boolean> {
  return await getModalityOnStorage(userId, modalityId, modalityRepository);
}
