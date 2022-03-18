import { getModalityOnStorage } from '@repositories/classes/storage/getModality';

export async function getModality(
  userId,
  modalityId,
  modalityRepository,
): Promise<any> {
  return await getModalityOnStorage(userId, modalityId, modalityRepository);
}
