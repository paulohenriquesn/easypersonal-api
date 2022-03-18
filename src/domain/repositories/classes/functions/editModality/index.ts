import { editModalityOnStorage } from '@repositories/classes/storage/editModality';

export async function editModality(
  userId,
  modalityId,
  body,
  modalityRepository,
): Promise<boolean> {
  return await editModalityOnStorage(
    userId,
    modalityId,
    body,
    modalityRepository,
  );
}
