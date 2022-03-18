import { deleteModalityOnStorage } from '@repositories/classes/storage/deleteModality';

export async function deleteModality(
  userId,
  modalityId,
  modalityRepository,
): Promise<boolean> {
  return await deleteModalityOnStorage(userId, modalityId, modalityRepository);
}
