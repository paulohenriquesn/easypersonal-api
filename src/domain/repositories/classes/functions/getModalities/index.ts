import { getModalitiesOnStorage } from '@repositories/classes/storage/getModalities';

export async function getModalities(
  userId,
  modalityRepository,
): Promise<boolean> {
  return await getModalitiesOnStorage(userId, modalityRepository);
}
