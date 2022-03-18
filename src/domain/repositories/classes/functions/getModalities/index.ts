import { getModalitiesOnStorage } from '@repositories/classes/storage/getModalities';

export async function getModalities(userId, modalityRepository): Promise<any> {
  return await getModalitiesOnStorage(userId, modalityRepository);
}
