import { createModalityOnStorage } from '@repositories/classes/storage/createModality';
import { createModalitySchema } from '@schemas/Classes/yupValidator';

export async function createModality(
  body,
  userId,
  modalityRepository,
): Promise<boolean> {
  const requiredFields = ['name', 'color'];

  for (const field of requiredFields) {
    if (body[field] === undefined) {
      return false;
    }
  }

  if (createModalitySchema.isValidSync(body)) {
    return await createModalityOnStorage(body, userId, modalityRepository);
  }

  return false;
}
